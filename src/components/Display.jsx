import React from 'react';
import{useSelector} from 'react-redux';


const Display = (props) => {
    const value = useSelector(state => state.display)

    return (
        <div id={'display'}>
            {value}
        </div>
    );
}

export default Display;