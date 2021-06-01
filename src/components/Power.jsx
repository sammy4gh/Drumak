import React from 'react';
import {useState} from 'react'
import Switch from "react-switch";
import {FaPowerOff} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators } from '../state/index';


const Power = (props) => {


    const power = useSelector(state => state.power)

    const dispatch = useDispatch()
    const {powerAction} = bindActionCreators(actionCreators, dispatch)


    let onStyle={
        color:'#B7F04D',
        fontSize: '1em',
        textAlign: 'center',
        transform: 'rotate(90deg)',

    }
    let offStyle ={
        color:'#FF0000',
        fontSize: '1em',
        textAlign: 'center',
        transform: 'rotate(90deg)',

    }
    return (
        <div className="power">
            <label>
                <Switch
                    onChange={(event)=> powerAction(event)}
                    checked={power}
                    offColor={"#FC7644"}
                    onColor={"#FC7644"}
                    offHandleColor={'#FC7644'}
                    onHandleColor={'#FC7644'}
                    height={20}
                    width={76}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    uncheckedHandleIcon=<FaPowerOff style={offStyle}/>
                    checkedHandleIcon=<FaPowerOff style={onStyle}/>
                    className="react-switch"
                />
            </label>
        </div>
    );
};


export default Power;