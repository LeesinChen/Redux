function asyncReducer(state = {status: false, items: []}, action) {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                status: true
            }
        case 'SUCCESS_REQUEST':
            return {
                status: false,
                items: action.items,
            }
        case 'FAIL_REQUEST':
            return {
                status: false,
                items: [],
                errorInfo: '请求失败'
            }
        default:
            return state;
    }
}