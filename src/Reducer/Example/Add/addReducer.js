function addNumberReducer(state = { number: 0, addModelShow: false }, action) {
    switch (action.type) {
        case "RETURN":
            return {
                number: 0,
                addModelShow: false,
            }
        case "ADD_ONE":
            return {
                number: state.number + 1,
                addModelShow: false,
            }
        case "ADD_TWO":
            return {
                number: state.number + 2,
                addModelShow: false,
            }
        case "ADD_THREE":
            return {
                number: state.number + 3,
                addModelShow: false,
            }
        case "SHOW":
            return {
                ...state,
                addModelShow: true,
            }
        case "HIDE":
            return {
                ...state,
                addModelShow: false,
            }
        default:
            return state
    }
}
export default addNumberReducer;
