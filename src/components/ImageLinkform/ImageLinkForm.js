import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onDetectButton}) => {
    return(
       <div className = 'ma4 mt0'>
          <p className = 'f4 black Font'>
              {'Vision will detect faces in any image. Just copy and paste the URL of any image below. Give it a try!'}
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