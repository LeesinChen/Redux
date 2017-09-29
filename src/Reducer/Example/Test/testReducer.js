function styleReducer(state = { background: '#eee' }, action) {
    switch (action.type) {
        case "CHANGE_TO_YELLOW":
            return {
                background: "#fff143"
            }
        case "CHANGE_TO_GRAY":
            return {
                background: "#eee"
            }
        default:
            return state;
    }
}
function pushText(state = { value: '' }, action) {
    switch (action.type) {
        case "PUSH_TO_PAGE":
            return {
                value: action.text
            }
        default:
            return state
    }
}

export default {
    styleReducer,
    pushText
}
