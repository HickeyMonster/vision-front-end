import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn}) => {
    if(isSignedIn){
    return(
        <nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={ ()=>onRouteChange('signin')} className= 'f4 link dim white pa2 pointer underline ma1'>Sign Out</p>
        </nav>
    );
 }else {
    return(
        <nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={ ()=>onRouteChange('register')} className= 'f4 link dim white pa2 pointer underline'>Register</p>
            <p onClick={ ()=>onRouteChange('signin')} className= 'f4 link dim white pa2 pointer underline'>Sign In</p>
        </nav>
    );
}
}


export default Navigation;