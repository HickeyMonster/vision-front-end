import React from 'react';
import Logo from '../Logo/Logo';
import  './Toolbar.css';
import NavigationItems from '../Navigation/NavigationItems';

const Toolbar = ({signedInState, routeChange}) =>{
    
    return(
       <header className = {'Toolbar'}>
               <Logo/>
           <nav>
               <NavigationItems navRouter ={routeChange} loggedIn= {signedInState} />
           </nav>
       </header>
    );
}

export default Toolbar;  