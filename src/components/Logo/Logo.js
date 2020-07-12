import React from 'react';
import Tilt from 'react-tilt';
import face from './face-id.png';
import './Logo.css';

const Logo = () => {
    return(
           <Tilt className="Tilt br2 shadow-2" options={{ max :50 }}  >
                <img alt= 'logo' src={ face }/>
            </Tilt>  
    );
}


export default Logo;