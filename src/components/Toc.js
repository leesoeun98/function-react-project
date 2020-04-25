import React,{useState} from 'react';

function Toc(props){
    const onTocClicked = (e) => {
        e.preventDefault();
        props.changeMode();
    };

    return (
        <div>
            <ul>
                <li><a href="#" onClick={onTocClicked}>dummy1</a></li>
                <li><a href="#" onClick={onTocClicked}>dummy2</a></li>
                <li><a href="#" onClick={onTocClicked}>dummy3</a></li>
            </ul>
        </div>
    );
}

export default Toc;