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
import Add from './Container/Example/Add/Add';

// reducer
import reducerObj from './Reducer/index';

// combineReducers 从 reducerObj 中拿到的是一个对象

let store = createStore(
    combineReducers({
        ...reducerObj,
        routing: routerReducer
    })
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}>
                <Route path="/lessonOne" component={LessonOne} />
                <Route path="/example/add" component={Add} />
            </Route>
        </Router>
    </Provider>, document.getElementById('content')
);
