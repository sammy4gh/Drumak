
const reducer = (state=0, action) =>{
    switch (action.type){
        case "add":
            return state+action.payload
        case "output":
            return action.payload
        case "test":
            return action.payload
        default:
            return state;
    }
}

export default reducer