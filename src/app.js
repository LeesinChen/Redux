// 项目依赖
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory } from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import 'babel-polyfill';

const loggerMiddleware = createLogger();

// home
import Home from './Container/Home/Home';
// 路由
import LessonOne from './Container/LessonOne/LessonOne';
import Add from './Container/Example/Add/Add';
import TableExample from './Container/Example/TableExample/TableExample';
import Test from './Container/Example/Test/Test';
import Test1 from './Container/Example/Test1/Test1';
import Async from './Container/Example/Async/Async';

// reducer
import reducerObj from './Reducer/index';

// combineReducers 从 reducerObj 中拿到的是一个对象 对象的每一个key 对应的是相应reducer管理的state数据

let store = createStore(
    combineReducers({
        ...reducerObj,
        routing: routerReducer,
    }),
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
);
const history = syncHistoryWithStore(browserHistory, store);

// console.log('这就是store===>>>', store)
// console.log('getState===>>>', store.getState());

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home}>
                <Route path="/lessonOne" component={LessonOne} />
                <Route path="/example/add" component={Add} />
                <Route path="/example/table" component={TableExample} />
                <Route path="/example/async" component={Async} />
                <Route path="/test" component={Test} />
                <Route path="/test1" component={Test1} />
            </Route>
        </Router>
    </Provider>, document.getElementById('content')
);
