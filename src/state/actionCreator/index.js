
export const powerAction = (event)=>{
    return (dispatch)=>{
        dispatch({
            type:'power',
            payload:event
        })
    }
}

