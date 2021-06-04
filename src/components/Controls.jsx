import React from 'react';
import Power from './Power';
import Volume from './Volume';

const Controls = (props) => {
    return (
        <div id="controls">
            <Volume/>
            <Power/>

        </div>
    );
}

export default Controls;