import React from 'react';
import './Search.css';

function Search({handleInput, search}){
    return(
        <div className="searchbox__wrap">
            <input type="text" placeholder="Search" className="searchbox" onChange={handleInput} onKeyPress={search}/>
            <i className="fa fa-search" aria-hidden="true"></i>
        </div>
    )
}
export default Search;