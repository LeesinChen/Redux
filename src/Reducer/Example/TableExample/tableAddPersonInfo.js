function addPersonReducer(state = [], action) {
    switch (action.type) {
        case "ADD_PERSON_INFO":
            return [
                ...state,
                {
                    name: action.name,
                    age: action.age,
                    sex: action.sex,
                    key: action.key,
                }
            ]
        default:
            return state
    }
}

export default addPersonReducer;