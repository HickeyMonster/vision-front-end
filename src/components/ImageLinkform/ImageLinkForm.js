import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetectButton}) => {
    return(
       <div className = 'Image-form'>
          <p className = 'f6 black Font'>
              {'Copy and paste the URL of any image below and see vision at work!'}
          </p>
          <div className= 'center'>
              <div className= 'form center pa4 br3 shadow-5'>
                    <input className= 'f5 pa1 w-70 center' type='text' onChange={onInputChange} />
                    <button className= 'ml3 tc w-25 grow link ph3 pv2 dib white bg-light-purple shadow-3' onClick={ onDetectButton}>Detect</button>
              </div>
          </div>
       </div>
    );
} 


export default ImageLinkForm;