import React,{useState} from 'react';

function Toc(props){
    const onTocClicked = (e, index) => {
        e.preventDefault();
        props.changeMode();
        props.setContent(props.tocList[index]); // 메뉴 출력할 때 지정한 index를 그대로 onTocClicked에서 활용
    };

    return (
        <div>
            <ul>
                {/* list의 값을 사용해야할 땐 map 사용 */}
                {props.tocList.map((value, index) => (
                    <li key={index} /* React에선 list를 이용해 무언갈 출력할 때 element마다 key값을 반드시 지정해야 함 (물론 안겹치게) */>
                        <a href="#" onClick={(e) => onTocClicked(e, index)}>
                            {value.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Toc;