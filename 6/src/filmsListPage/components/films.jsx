import React from 'react';
import FilmItem from 'filmsListPage/components/filmItem';

import 'filmsListPage/styles/films';

const Films = ({d}) => {
    const films = d.map((film) => {return (<FilmItem 
        key={film.id}
        imgUrl={film.poster_path}
        id={film.id}
        name={film.title}
        overview={film.overview}/>
    )});
    return(
         <div className="films">{films}</div>
    );
};

export default Films;
