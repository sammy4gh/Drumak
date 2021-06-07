const displayReducer = (state = '', action)=>{
    switch (action.type) {
        case 'display':
            return action.payload
        default:
            return state
    }
}

export default displayReducer;