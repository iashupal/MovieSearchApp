import React from 'react';
import Result from './Result';
import '../App.css';

function Listing({results, openPopup}){
    return(
        <div className="listing">
            {[results].map(result => ( 
                <Result key={result.imdbID} result={result}  openPopup={openPopup}/>
            ))}
        </div>
    );
}

export default Listing;