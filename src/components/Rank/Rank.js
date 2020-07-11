import React from 'react';


const Rank = ({name, entries}) => {
    return(
        <div style={{fontFamily: 'cursive'}}>
             <div className = 'black f2 mb3'>
                { `Welcome, ${name}`}
             </div>
            <div className = 'white f3 mb2'>
                { `Your current entry count is...`}
            </div>
            <div className = 'gold f1' >
                {entries}
            </div>
        </div>
    );
} 


export default Rank;