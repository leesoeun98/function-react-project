import React,{useState} from 'react';

function Subject(props){
    return(
        <div> 
            <h1>
                <a href="#" onClick={props.onChangeMode}>{props.title}</a>
            </h1>
            {props.sub}
        </div>
    );
}

export default Subject;

