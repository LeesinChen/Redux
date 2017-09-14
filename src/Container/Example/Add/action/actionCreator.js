function actionCreator(number) {
    switch (number) {
        case 0:
            return {
                type: "RETURN"
            }
        case 1:
            return {
                type: "ADD_ONE"
            }
        case 2:
            return {
                type: "ADD_TWO"
            }
        case 3:
            return {
                type: "ADD_THREE"
            }
        default:
            return {}
    }
}
export default actionCreator;