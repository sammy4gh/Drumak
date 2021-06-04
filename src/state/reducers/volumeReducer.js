const volumeReducer = (state=50, action)=>{
    switch (action.type) {
        case "volume":
            return action.payload
        default:
            return state;

    }
}

export default volumeReducer