import { createStore, combineReducers } from 'redux';

// 比如这是没有拆分的Reducer
function reducer (state = {value: 0}, action) {
    // do something
}

const reducerObj = {
    reducer1: function (state = [], action) {
        // do something
    },
    reducer2: function (state, action) {
        // do something
    },
    reducer3: function (state, action) {
        // do something
    },
    // reducer......
}


// let store = createStore(reducer);
// let store = createStore(combineReducers(reducerObj));

/*
* 其实它也是一个reducer，它接受整个state和一个action，然后将整个state拆分发送给对应的reducer进行处理，
* 所有的reducer会收到相同的action，不过它们会根据action的type进行判断，有这个type就进行处理然后返回新的state，没有就返回默认值
* 然后这些分散的state又会整合在一起返回一个新的state树。
* */








