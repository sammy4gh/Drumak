
export const actionFunc =(input={})=>{
    return (dispatch)=>{
        dispatch({
            type: "output",
            payload:input
        })
    }
}

export const actionFuncTwo =(name)=>{
    return(dispatch)=>{
        dispatch({
            type: "test",
            payload:"hello " + name
        })
    }
}

export const clipsAction = (clips)=>{
    return(dispatch)=>{
        dispatch({
            type: "clips",
            payload:clips
        })
    }
}
