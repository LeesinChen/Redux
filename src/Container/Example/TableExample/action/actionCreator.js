    // 这是一个action
    const action = {
        type: "ADD_NUMBER"
    }

    // 这是一个 action creator
    function actionCreator(name, sex, age, key) {
        return {
            type: "ADD_PERSON_INFO",
            name: name,
            sex: sex,
            age: age,
            key: key,
        }
    }





export default actionCreator;
