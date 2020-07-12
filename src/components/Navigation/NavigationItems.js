import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import  './NavigationItems.css';

const NavigationItems = ({ onRouteChange, isSignedIn}) =>{
  if(isSignedIn){
    return(
  <ul className = {'NavigationItems'}>
      <NavigationItem onClick={()=>onRouteChange('signin')}>Sign Out</NavigationItem>
  </ul>
    );
  }else {
    return(
      <ul className = {'NavigationItems'}>
      <NavigationItem onClick={ ()=>onRouteChange('register')}>Register</NavigationItem>
      <NavigationItem onClick={ ()=>onRouteChange('signin')}>Sign In</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems; 

// const Navigation = ({ onRouteChange, isSignedIn}) => {
//     if(isSignedIn){
//     return(
//         <nav >
//             <Logo/>
//             <p onClick={ ()=>onRouteChange('signin')} className= 'f4 link dim white pa2 pointer underline ma1' style= {{display: 'flex', justifyContent: 'flex-end'}}>Sign Out</p>
//         </nav>
//     );
//  }else {
//     return(
//         <nav>
//             <Logo/>
//             <div style= {{display: 'flex', justifyContent: 'flex-end'}}>
//                 <p onClick={ ()=>onRouteChange('register')} className= 'f4 link dim white pa2 pointer underline'>Register</p>
//                 <p onClick={ ()=>onRouteChange('signin')} className= 'f4 link dim white pa2 pointer underline'>Sign In</p>
//             </div>
//         </nav>
//     );
// }
// }


