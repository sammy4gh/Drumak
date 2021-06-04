import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index"


const Drumpad = ({clip}) => {

    const power = useSelector(state => state.power)
    const volume = useSelector(state =>state.volume)

    const dispatch = useDispatch()
    const {displayAction} = bindActionCreators(actionCreators, dispatch)

    function playSound() {
                const sound  = document.getElementById(clip.keyTrigger)
                sound.currentTime =0
                sound.volume = volume/100
                power? sound.play() :sound.pause()
                return sound;
    }


    const padOnStyle ={
        width: '116px',
        height: '89px',
        marginTop: 13,
        background: '#B7F04D',
        boxShadow: '4px 6px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        color: '#FC7644',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const padOffStyle ={
        width: '116px',
        height: '89px',
        marginTop: 13,
        background: '#B7F04D',
        borderRadius: '10px',
        color: '#FC7644',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'

    }
    const func=(event)=>{
        console.log('event', event)
    }

    return (
                    <div
                        className={"drum-pad"}
                        onClick={/*playSound*/(event)=>{
                        playSound();
                        func(clip.id)
                        }
                        }
                        style={power? padOnStyle : padOffStyle}
                        key={clip.id}
                    >

                        <audio
                            className={"clip"}
                            id={clip.keyTrigger }
                            src={clip.url}
                            type={"audio/mpeg"}
                        />
                        {clip.keyTrigger}

                    </div>


    );
}

export default Drumpad;