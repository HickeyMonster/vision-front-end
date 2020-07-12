import React from 'react';
import  './NavigationItem.css';

const NavigationItem = (props) =>{
    return(
    <li className = {'NavigationItem'}>
        <p>
            {props.children}
        </p>
    </li>
    );
}

export default NavigationItem; 