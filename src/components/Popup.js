import React from 'react';

function Popup({selected, closePopup} ){
    return(
        <div className="popup">
            <div className="content">
                <h2>{selected.Title}</h2>
                
                <div className="plot">
                    <img src={selected.Poster}/>
                    <div>
                        <p><span>{selected.Year}</span><b>&nbsp;|&nbsp;</b>{selected.Director}</p>
                        <p className="rating">Rating: {selected.imdbRating}</p>
                        <p>Description: {selected.Plot}</p>
                        <p>Actors: {selected.Actors}</p>
                    </div>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </div>
    )
}

export default Popup;