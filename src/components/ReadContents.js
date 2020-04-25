import React,{useState} from 'react';


function ReadContents(props){
    return (
        <div>
            <h1>{props.content.title}</h1>
            {props.content.desc}
        </div>
    );
}

export default ReadContents;