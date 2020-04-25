import React,{useState} from 'react';

function Toc(props){
    const onTocClicked = (e, lang) => {
        e.preventDefault();
        props.changeMode();
        props.setContent(props.contents[lang]); // props.contents는 dictionary(object)이므로 lang 값으로 접근
    };

    return (
        <div>
            <ul>
                {/* 각 메뉴별로 다른 lang값을 onTocClicked()에 넘겨 줌 */}
                <li><a href="#" onClick={(e) => onTocClicked(e, 'html')}>HTML</a></li>
                <li><a href="#" onClick={(e) => onTocClicked(e, 'css')}>CSS</a></li>
                <li><a href="#" onClick={(e) => onTocClicked(e, 'javascript')}>JavaScript</a></li>
            </ul>
        </div>
    );
}

export default Toc;