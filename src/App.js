import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkform/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Registration from './components/Registration/Registration';
import './App.css';

// When using an API key that isn't free or lets say we want to hide it, we move it to the back-end.
const app = new Clarifai.App({
  apiKey: 'de50d21a76f44ff684af4bf25e9b147f'
});

const particleOptions = {
      "particles": {
        "number": {
            "value": 50,
            'density': {
              enable: true,
              value_area: 300
            }
        }
      },
        "size": {
            "value": 3
        },
    
        "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
  // regEmail: '',
  // regPassword: '',
  // regName:''
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) =>{
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  } 
  
  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  faceboxVisual = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value}); 
  }

  onDetectButton = () =>{ 
    this.setState({ imageURL: this.state.input });
    app.models.predict( Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response =>{ if(response){
      fetch('https://mysterious-inlet-58186.herokuapp.com/image',{
        method: 'put', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id,
        })
      })  
      .then(response => response.json())
      .then(count => {this.setState(Object.assign(this.state.user, {entries: count}))

      })
      .catch(err => console.log(err));
    }
    this.faceboxVisual(
    this.calculateFaceLocation(response))
    // console.log('work!!');
  })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if( route === 'signout'){
      this.setState(initialState)
    }
    else if ( route === 'home'){
      this.setState({ isSignedIn: true})
    }
    this.setState({route: route})
  }
  // onSubmitRegistration =() =>{
  //   fetch('https://mysterious-inlet-58186.herokuapp.com/register', {
  //       method: 'post',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //           email: this.state.regEmail,
  //           password: this.state.regPassword,
  //           name: this.state.regName,
  //       })
  //   })
  //   .then(response => response.json())
  //   .then(user =>{
  //       if(user.id){
  //           this.loadUser(user);
  //           this.onRouteChange('home');  
  //       }
  //       console.log(user);
  //  })
  //  .catch(err => console.log('error!'));
  // }

  render(){
    const { isSignedIn, imageURL, route,  box, user} = this.state;
    return(
      <div className="tc">
        <Particles className="particles" params={ particleOptions } />
        <Navigation isSignedIn= {isSignedIn} onRouteChange= {this.onRouteChange}/>
        {route === 'home' 
        ? <div > 
            <Logo/> 
            <Rank name ={user.name} entries ={user.entries}/>
            <ImageLinkForm onInputChange = { this.onInputChange } onDetectButton={ this.onDetectButton } />
            <FaceRecognition imageURL = {imageURL} box = {box}/> 
          </div>
        : (
          this.state.route === 'signin'
          ? <SignIn loadUser = {this.loadUser} onRouteChange= {this.onRouteChange } />
          : <Registration onRouteChange= {this.onRouteChange} loadUser = { this.loadUser } />
          )  
        }   
      </div>
    );
  }
   
}

export default App;
