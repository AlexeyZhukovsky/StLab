import React from 'react';
import 'filmInfoPage/styles/filmInfo';

const mask = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

const FilmInfo = ({film}) => {
    return (
        <div className="filmInfo">
            <div className="filmInfo__poster">
                <div className="filmPoster">
                    <img className="filmPoster__img" src={mask + film.poster_path} alt="poster"/>  
                </div> 
            </div>
            <div className="filmInfo__textPart">
                <div className="textPartFilmInfo">
                    <h1 className="textPartFilmInfo__title">{film.title}</h1> 
                    <div>Release date: {film.release_date}</div>   
                    <div>Popularity: {film.popularity}</div>   
                    <div className="textPartFilmInfo__description">Description: {film.overview}</div>
                </div>
            </div>   
        </div>
    );
};

export default FilmInfo;