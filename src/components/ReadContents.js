import React,{useState} from 'react';


function ReadContents(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {props.desc}
        </div>
    );
}

export default ReadContents;