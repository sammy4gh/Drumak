import React from 'react';
import {FaVolumeUp, FaVolumeMute} from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators } from '../state/index';

const Volume = (props) => {

    const volume = useSelector(state =>state.volume)
    const dispatch = useDispatch()
    const { volumeAction} = bindActionCreators(actionCreators, dispatch)




    const handleStyle={
        borderColor: '#FC7644',
        height:16,
        width: 16,
        marginLeft: -4,
        marginTop: -3,
        backgroundColor: '#B7F04D',
    }

    const trackStyle ={
        backgroundColor: '#FC7644',
        height: 10,
        width:140
    }

    const railStyle ={
        backgroundColor:'#B7F04D',
        height:10,
    }

    return (
        <div id={'volume'}>
            <FaVolumeMute color={"#FC7644"}/>
            <Slider
                id={"slider"}
                value={volume}
                onChange={(value)=>volumeAction(value)}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
            />

            <FaVolumeUp color={'#FC7644'} />
        </div>
    );
}

export default Volume;