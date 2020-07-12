import React from 'react';
import Logo from '../../Logo/Logo';
import  './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = ({toggleSideDrawer}) =>{
    
    return(
       <header className = {'Toolbar'}>
               <Logo/>
           <nav>
               <NavigationItems/>
           </nav>
       </header>
    );
}

export default Toolbar;  