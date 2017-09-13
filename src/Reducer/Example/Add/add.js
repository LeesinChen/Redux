function add(state = { number: 0 }, action) {
    switch (action.type) {
        case "RETURN":
            return {
                number: 0
            }
        case "ADD_ONE":
            return {
                number: state.number + 1
            }
        case "ADD_TWO":
            return {
                number: state.number + 2
            }
        case "ADD_THREE":
            return {
                number: state.number + 3
            }
        default:
            return state
    }
}
export default add;
