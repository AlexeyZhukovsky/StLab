import React from 'react';
import {Link} from 'react-router-dom';

import 'filmsListPage/styles/filmItem';

const mask = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

const FilmItem = ({imgUrl, id, name, overview}) => {
    if (overview.length > 300){
        overview = overview.slice(0,300) + '...';
    }
    return (
        <div className="filmItem">
            <img src={mask + imgUrl} className="filmItem__img"/>
            <div className="filmItem__textPart">
                <div className="textPart">
                    <div className="textPart__filmInfo">
                        <ul className="filmInfoList">
                            {/* <li className="filmInfoList__item">{id}</li> */}
                            <li className="filmInfoList__item filmInfoList__item--title">{name}</li>
                            <li className="filmInfoList__item">{overview}</li>
                        </ul>
                    </div>
                    <div className="textPart__link">
                        <Link className="moreInfoLink" to={{ pathname: '/2/'+ id }}>More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmItem;