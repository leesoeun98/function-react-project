import React, {useState} from 'react';

export default function CreateContent(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const onCreateClicked = (e) => {
        // button tag를 이용했기 때문에 e.preventDefault를 해줄 필요가 없다
        
        // 예외 처리
        if (!title || !desc) {
            alert('값을 모두 채워주세요.');
            return;
        }

        // title과 desc 값이 모두 채워져있을 경우 tocList에 추가
        const newList = [...props.tocList];
        // const newList = props.tocList;

        /*
            ▲ 여기서 왜 전개구문([...props.tocList])을 이용하죠?

                -> 여기서 아주 중요한 사실을 짚고 넘어가야 합니다.
                    react는 state의 변화를 감지하고 (setState를 이용하면 state가 변화되겠죠?)
                    이를 통해 re-render를 하여 변동사항을 화면에 반영합니다.

                -> 일반적인 상황에서 setState(...)을 사용하면 react가 state의 변화를 잘 감지하지만,
                    딱 한 상황. state가 단순 int, bool 따위가 아닌 list, object등일 경우 의도한대로 작동하지 않습니다.
                    분명 useState를 해줬는데도 state의 변화를 react가 감지하지 못하죠.

                -> 그 이유는 react는 이전 state와 새로운 state를 비교할 때 'shallow compare'를 합니다.
                    즉, state가 list일 경우, list 내부의 값의 변화를 감지하는게 아니라,
                    list 변수 자체가 변했냐를 확인한다는거죠.
                    
                -> 만약 기존의 props.tocList를 그대로 사용할 경우 내부 element를 지우든,
                    새로운 element를 push를 하든 react는 인식하지 못합니다.
                    (주석을 풀어서 확인해보세요)

                -> JS의 전개구문을 활용하면 교묘하게 이 문제를 해결할 수 있습니다.
                    전개구문을 이용해 기존 리스트의 값을 새 리스트에 넣어주면 react도 이를 새로운 list로 인식할 것입니다.
                    (전개구문에 대한 MDN 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax )

        */

        newList.push({title: title, desc: desc});
        props.setTocList(newList);

        // title과 desc 초기화
        setTitle('');
        setDesc('');
    }

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                /* input의 경우 출력과 입력의 역할을 동시에 하기 때문에, value와 onChange가 쌍으로 필요하다고 보면 된다 */
                value={title}
                onChange={(e) => setTitle(e.target.value) /* <- e.target.value를 이용한다는건 그냥 공식처럼 외우는게 나을 듯 */}></input>
            {/* ▼ 실제로 이따구로 br이용해서 레이아웃 하면 혼납니다 */}
            <br/>
            <br/>
            <textarea
                placeholder="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}></textarea>
            <br/>
            <br/>
            <button onClick={onCreateClicked} /* 새로 추가할 argument가 없고, button이 하나뿐이므로 arrow func 사용 안해도 됨 */>
                create
            </button>
        </div>
    );
}