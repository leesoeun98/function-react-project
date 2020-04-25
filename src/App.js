import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContents from './components/ReadContents';

// constants
const MODE_WELCOME = 'welcome';
const MODE_READ = 'read';
const MODE_CREATE = 'create';
const MODE_UPDATE = 'update';
const MODE_DELETE = 'delete';
const CONTENT_WELCOME = {title: 'Welcome', desc: 'Hello, React!'};
const TOC_LIST_DEFAULT = [
  {title: 'HTML', desc: 'HTML is for layout'},
  {title: 'CSS', desc: 'CSS is for graphics'},
  {title: 'JavaScript', desc: 'JS is for interaction'},
];

// main component
function App() {
  const [mode, setMode] = useState(MODE_WELCOME);
  const [content, setContent] = useState(CONTENT_WELCOME); // ReadContents에 표시될 title과 description
  const [tocList, setTocList] = useState(TOC_LIST_DEFAULT); // Toc 메뉴에 들어갈 것들 (CRUD 메뉴를 통해 수정이 되므로 state로 선언)

  return (
    <div className="App">
      {/*
        function을 넘겨줄 떄와 arrow function을 넘겨줄 때의 차이

          -> 쉽게 말하면 해당 component에서 넘겨받은 function을 이용할 때
             그 function의 argument 값을 component 안에서 지정한다면 그냥 function을 넘겨주고
             argument 값을 상위 component에서 지정하는 경우라면 arrow function 이용

          -> 아래에서 setMode에 들어갈 argument는 전부 이 상위 component가 가지고 있음.
             그렇기 떄문에 arrow function을 이용해서 '아예 argument까지 지정해준 채로' 넘겨준 것

          -> 반면 setContent의 경우 Subject에서 사용할 땐 argument 값이 CONTENT_WELCOME으로 고정이지만,
             Toc에서 사용할 땐 메뉴에 따라서 달라짐 (argument를 Toc component 내부적으로 지정할 것으로 보임).
             그렇기 때문에 Subject에 전해줄 땐 arrow func으로 setContent에 argument까지 지정해서 보내주지만,
             Toc에 전해줄 떈 그냥 setContent 함수만 넘겨주는 것
      */}

      {/* --- 제목 --- */}
      <Subject
        changeMode={() => setMode(MODE_WELCOME)}
        changeContent={() => setContent(CONTENT_WELCOME)}></Subject>

      {/* --- 콘텐츠 메뉴 --- */}
      <Toc
        changeMode={() => setMode(MODE_READ)}
        tocList={tocList}
        setContent={setContent}></Toc>

      {/* --- CRUD 메뉴 --- */}
      <Control></Control>

      {/* --- 출력될 내용 --- */}
      {(mode===MODE_WELCOME || mode===MODE_READ) && <ReadContents content={content}></ReadContents>}
      {mode===MODE_CREATE && <></>}
      {mode===MODE_UPDATE && <></>}
      {mode===MODE_DELETE && <></>}
    </div>
  );
}

export default App;
