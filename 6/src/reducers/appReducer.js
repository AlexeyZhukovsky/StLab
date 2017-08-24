import { combineReducers } from 'redux';
import {filmListReducer, filmsHasErrored, filmsIsLoading, films} from 'filmsListPage/reducers/filmListReducer';
import {filmInfoReducer, imagesHasErrored, imagesIsLoading, images} from 'filmInfoPage/reducers/filmInfoReducer';
import loginPageReducer from 'loginPage/reducers/loginPageReducer';
import {routerReducer} from 'react-router-redux';

const appReducer = combineReducers({
    routing: routerReducer,
    filmListReducer,
    filmsHasErrored,
    filmsIsLoading,
    films,
    loginPageReducer,
    filmInfoReducer,
    imagesHasErrored,
    imagesIsLoading,
    images
});

export default appReducer;



