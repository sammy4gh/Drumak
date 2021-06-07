import React from 'react';
import Drumpad from "./Drumpad";
import {useSelector} from "react-redux";

const DrumPads = (props) => {

    const clips = useSelector((state)=>state.clips);


    return (
        <div id={"drum-pads"}

        >

            {clips.map((clip)=>
            <Drumpad
                key={clip.id}
                clip={clip}
            />
            )}
        </div>


    );
};

export default DrumPads;