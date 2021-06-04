const displayReducer = (state = '', action)=>{
    switch (action ) {
        case 'display':
            return action.payload
        default:
            return state
    }
}