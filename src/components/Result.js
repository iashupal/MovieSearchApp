import React from 'react';
import '../App.css';

function Result({result, openPopup}){
    return(
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} alt="poster"/>
            <div className="result__content">
                <h3>{result.Title}</h3>
                <p>{result.imdbRating}</p>
            </div>
            <h4>{result.Genre}</h4>
        </div>
    )
}
export default Result;