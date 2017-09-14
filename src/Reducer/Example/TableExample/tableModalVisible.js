function showOrHideModalReducer(state = {visible: false}, action) {
    switch (action.type) {
        case "MODAL_SHOW":
            return {
                visible: true
            }
        case "MODAL_HIDE":
            return {
                visible: false
            }
        default:
            return state
    }
}

export default showOrHideModalReducer;
