function remove(state = [], action) {
    // 在此处如何获得全局 tableData?
    // 我的思路是在此获得全局state，然后通过action传过来的key进行匹配，如果相等，就删除。但是现在遇到一个问题，在这里怎么拿到全局state？
    switch (action.type) {
        case "REMOVE":
            return [
                // ...state.slice(0, action.idCard),
                // Object.assign({}, state[action.idCard], {
                //     completed: true
                // }),
                // ...state.slice(action.idCard + 1)
            ]
        default:
            return null
    }
}

export default remove;
