import React, {useState} from 'react';

export default function CreateContent(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

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
            <button>create</button>
        </div>
    );
}