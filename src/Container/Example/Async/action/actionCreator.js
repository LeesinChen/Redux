import fetch from 'isomorphic-fetch';

function post(URL) {
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch({type: 'START_REQUEST'});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //'Accept:application/json, text/javascript, */*';
        const request = new Request(URL, {
            headers: headers,
            method:"GET"
        });
        return fetch(request)
            .then((response) => {
                console.log('response====>>>>', response)
            })
            .then(() =>
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。
                dispatch({type: 'SUCCESS_REQUEST', items: {name: 'zhangSan', age: 19, sex: "男"}})
            )
    }
}
export default post;

