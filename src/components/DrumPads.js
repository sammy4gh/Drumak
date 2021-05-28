import React from 'react';
import {useState} from "react";
import Drumpad from "./Drumpad";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index"

const DrumPads = (props) => {

    const clips = useSelector((state)=>state.clips);
    const dispatch = useDispatch()
    const {actionFunc, actionFuncTwo, clipsAction} = bindActionCreators(actionCreators, dispatch)


    return (
        <div className={"drum-pads"}>
            {clips.map((clip)=>
            <Drumpad key={clip.id} clip={clip}/>
            )}
        </div>


    );
};

export default DrumPads;