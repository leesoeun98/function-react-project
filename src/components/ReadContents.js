import React,{useState} from 'react';


function ReadContents(props){
    return (        
        <div>
            {/* ReadContents는 그저 props로 받아온 content의 title과 desc를 출력하는 역할만 수행 */}
            <h1>{props.content.title}</h1>
            {props.content.desc}
        </div>
    );
}

export default ReadContents;