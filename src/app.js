// 项目依赖
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory } from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import 'babel-polyfill';

// home
import Home from './Container/Home/Home';
import LessonOne from './Container/LessonOne/LessonOne';


let store = createStore(
    combineReducers({
        routing: routerReducer
    })
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}>
                <Route path="LessonOne" component={LessonOne} />
            </Route>
        </Router>
    </Provider>, document.getElementById('content')
);
