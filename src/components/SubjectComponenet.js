import React,{useState} from 'react';

function SubjectComponent(props){
    return(
        <div> 
            <h1>{props.title}</h1>
            {props.sub}
        </div>
    );
}

export default SubjectComponent;

