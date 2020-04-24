import React,{useState} from 'react';


function Toc(props){

    const list=[];
    const data=props.contents;
    for(let i=0;i<data.length;i++){
        list.push(
        <li key={data[i].id}><a href="#" onClick={props.onChangeMode}>{data[i].title}</a></li>
        )
    }

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Toc;