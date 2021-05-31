const powerReducer = (state=true, action)=>{
    switch (action.type) {
        case "power":
            return  action.payload;
        default:
            return state
    }
}

export default powerReducer;