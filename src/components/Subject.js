import React,{useState} from 'react';

function Subject(props){
    const onSubjectClicked = (e) => {
        e.preventDefault();
        props.changeMode();
    };

    return(
        <div> 
            <h1>
                <a href="#" onClick={onSubjectClicked}>WEB</a>
            </h1>
            World Wide Web!
        </div>
    );
}

export default Subject;

