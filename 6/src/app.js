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

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <Switch>
                <Route exact path="/" component={LoginFormContainer} />
                <Route path="/filmList" component={FilmsListContainer} /> 
                <Route path="/filmInfo/:id" component={FilmInfoContainer} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);