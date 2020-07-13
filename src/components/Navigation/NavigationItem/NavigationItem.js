import React from 'react';
import  './NavigationItem.css';

const NavigationItem = (props) =>{
    return(
    <li className = {'NavigationItem'}>
        <p onClick = { () => props.clicked('signin')} >
            {props.children}
        </p>
    </li>
    );
}

export default NavigationItem; 