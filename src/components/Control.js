import React,{useState} from 'react';

// control component
function Control(props){
    const onControlClicked = (e, mode) => {
        e.preventDefault();
        props.setMode(mode);
    }

    return (
        <div>
            <ul>
                <li><a href="#" onClick={(e) => onControlClicked(e, props.MODE_CREATE)}>Create</a></li>
                <li><a href="#" onClick={(e) => onControlClicked(e, props.MODE_UPDATE)}>Update</a></li>
                <li><button onClick={(e) => onControlClicked(e, props.MODE_DELETE)}>Delete</button></li>
            </ul>
        </div>
    );
}

export default Control;