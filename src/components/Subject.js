import React from 'react';

function Subject(props){
    const onSubjectClicked = (e) => {
        e.preventDefault();
        props.changeMode();
        props.changeContent();
    };

    return(
        <div> 
            {/* 어차피 Subject에 들어갈 텍스트는 변하지 않으므로 굳이 변수화하지 않고 바로 작성 */}
            <h1>
                <a href="#" onClick={onSubjectClicked}>WEB</a>
            </h1>
            World Wide Web!
        </div>
    );
}

export default Subject;

