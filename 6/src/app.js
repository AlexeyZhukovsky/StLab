import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';
import {Provider} from 'react-redux';
import {createStore, Dispatch} from 'redux';
import {Route, Switch, HashRouter} from 'react-router-dom';

import LoginFormContainer from 'loginPage/containers/LoginFormContainer';
import FilmsListContainer from 'filmsListPage/containers/FilmsListContainer';
import FilmInfoContainer from 'filmInfoPage/containers/FilmInfoContainer';
import appReducer from 'reducers/appReducer';
import load from 'helpers/load';

import '../src/app.less';

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {"store",console.log(store.getState())})
const history = syncHistoryWithStore(createHashHistory(),store);


// load('https://api.themoviedb.org/3/list/1?api_key=ef67a2155c49b98d383b4d9bd03f78ae').then(data => {
//             let filmsData = JSON.parse(data).items;
//             console.log(filmsData);
//             filmsData.map((item)=>{ 
//                 load('https://api.themoviedb.org/3/movie/'+item.id+'/images?api_key=ef67a2155c49b98d383b4d9bd03f78ae').then(b => { 
//                 item.backdrops = JSON.parse(b).backdrops;
//                 })});
//             console.log(filmsData);
//             store.dispatch({ type: 'ADD_DATA', payload: filmsData })
//             // this.props.onSaveResult(filmsData)
//         }); 
// //  store.dispatch({ type: 'ADD_DATA', payload: filmsData }) 

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <Switch>
                <Route exact path="/" component={LoginFormContainer} />
                <Route path="/1" component={FilmsListContainer} /> 
                <Route path="/2/:id" component={FilmInfoContainer} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);