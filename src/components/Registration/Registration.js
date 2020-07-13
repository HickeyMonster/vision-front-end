import React from "react";
// import _ from "lodash/fp";
// import { useForm } from "react-hook-form";
import "./Registration.css";


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://mysterious-inlet-58186.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
      .catch(err => console.log('error!'));
  }

  render() {
    return (
      <div className ="Register">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
                        <span className= 'no-underline'>Already have an account?</span>
                        <p onClick={()=>this.props.onRouteChange('signin')} className="f6 b link dim black db pointer underline ">Sign In</p>
                        </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Registration;
// const Registration =({onRegistration}) =>{ 
//   const { register, errors } = useForm();
//   return (
//     <article className="br3 ba dark-gray b--black-10 mb3 mt0 w-100 w-50-m w-25-l mw6 shadow-5 center">
//       <main className="pa4 black-80">
//       <form>
//       <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
//         <label className="b">First Name</label>
//         <input 
//           name="firstName"
//           ref={register({
//             required: true,
//             minLength: 5,
//             maxLength: 20,
//             pattern: /^[A-Za-z]+$/i
            
//           })}
//         />
//         {_.get("firstName.type", errors) === "required" && (
//           <p>This field is required</p>
//         )}
//         {_.get("firstName.type", errors) === "minLength" && (
//           <p>Name cannot be less than 3 characters!</p>
//         )}
//         {_.get("firstName.type", errors) === "pattern" && (
//           <p> Alphabetical characters only!</p>
//         )}
//         <label className="b">Email</label>
//         <input  name="Email" type="email" ref={register({ required: true, pattern: /^\S+@\S+$/i  })} />
//         {_.get("email.type", errors) === "pattern" && (
//           <p>Invalid Email!</p>
//         )}
//         {_.get("email.type", errors) === "required" && (
//           <p>This field is required</p>
//         )}
//         <label className="b">Password</label>
//         <input  name="password" type="password" required ref={register({ required: true, minLength: 5 })} />
//         {_.get("password.type", errors) === "minLength" && (
//           <p>Password cannot be less than 5 characters!</p>
//         )}
//         {_.get("password.type", errors) === "required" && (
//           <p>This field is required</p>
//         )}
//         <input onClick = { onRegistration } className="b  grow pointer f6 dib br2" type="submit" value="REGISTER" />
//       </form>
//     </main>
//    </article>    
//   );
//  }


// export default Registration;