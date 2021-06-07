import React from 'react';
import{useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index"


const Display = (props) => {
    const value = useSelector(state => state.display)

    return (
        <div id={'display'}>
            {value}
        </div>
    );
}

export default Display;