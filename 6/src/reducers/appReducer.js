import { combineReducers } from 'redux';
import filmListReducer from 'filmsListPage/reducers/filmListReducer';
import filmInfoReducer from 'filmInfoPage/reducers/filmInfoReducer';
import loginPageReducer from 'loginPage/reducers/loginPageReducer';
import {routerReducer} from 'react-router-redux';

const appReducer = combineReducers({
    routing: routerReducer,
    filmListReducer,
    loginPageReducer,
    filmInfoReducer
});

export default appReducer;



