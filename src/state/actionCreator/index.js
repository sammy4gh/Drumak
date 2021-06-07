export const volumeAction = (value)=>{
    return (dispatch)=>{
        dispatch({
            type:'volume',
            payload:value
        })
    }
}

export const powerAction = (event)=>{
    return (dispatch)=>{
        dispatch({
            type:'power',
            payload:event
        })
    }
};

export const displayAction = (display)=>{
    return (dispatch)=>{
        dispatch({
            type:'display',
            payload:display
        })
    }
}




