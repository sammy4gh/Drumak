import React from 'react';
import Power from './Power';
import Volume from './Volume';
import Display from './Display';

const Controls = (props) => {
    return (
        <div id="controls">
            <Volume/>
            <Power/>
            <Display/>
        </div>
    );
}

export default Controls;