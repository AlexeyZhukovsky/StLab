import React from 'react';
import 'filmsListPage/styles/searchFilm';

const SearchFilm = ({dispatch}) => {
    const search = e => {
        dispatch(e.target.value)
    };

    return (
        <div className="searchFilm">
            <div className="searchFilm__search">
                <input  
                    type = "text" 
                    placeholder = "Search..."
                    onChange = {search}/>
            </div>
            <div className="searchFilm__sort">    
                <select name="sort"></select> 
            </div>
        </div> 
    );
};

export default SearchFilm;