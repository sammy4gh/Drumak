import React from 'react';

const Drumpad = ({clip}) => {



    function playSound(){
                const sound  = document.getElementById(clip.keyTrigger)
                sound.currentTime =0
                sound.play()
                return sound;
    }
    const padStyle ={
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

    return (
                    <div
                        className={"drum-pads"}
                        onClick={playSound}
                        style={padStyle}
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