import React from 'react';
import './Rank.css';


const Rank = ({name, entries}) => {
    return(
        <div className = 'Rank'>
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