import fetch from 'isomorphic-fetch';

function post() {
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch('START_REQUEST');

        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json =>

                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。

                dispatch(receivePosts(subreddit, json))
            )
    }
}

