import React from 'react';
import Tilt from 'react-tilt';
import face from './face-id.png';
import './Logo.css';

const Logo = () => {
    return(
       <div className = 'ma4 mt0 mb0'>
           <Tilt className="Tilt br2 shadow-2" options={{ max :50 }}  >
                <div className="Tilt-inner pa3"><img alt= 'logo' src={ face }/></div>
            </Tilt> 
       </div>
    );
}


export default Logo;