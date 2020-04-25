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

// contents: ReadContents에 표시할 title과 description들
const contents = {
  welcome: {title: 'Welcome', desc: 'Hello, React!!'},
  html: {title: 'HTML', desc: 'HTML description'},
  css: {title: 'CSS', desc: 'CSS description'},
  javascript: {title: 'JavaScript', desc: 'JS description'},
}

// main component
function App() {
  const [mode, setMode] = useState(MODE_WELCOME);
  const [content, setContent] = useState(contents.welcome);

  return (
    <div className="App">
      {/* --- 제목 --- */}
      <Subject 
        changeMode={() => setMode(MODE_WELCOME) /* 그냥 'setMode(...)'가 아니라, arrow function으로 넘겨줄 것 */}
        changeContent={() => setContent(contents.welcome) /* Subject는 contents.welcome만 사용하므로 */}></Subject>

      {/* --- 메뉴 --- */}
      <Toc
        changeMode={() => setMode(MODE_READ)}
        contents={contents} /* Toc는 어떤 content를 사용할 지 모르므로 contents, setContents 자체를 넘겨 줌 */
        setContent={setContent}></Toc>
      <Control></Control>

      {/* --- 내용 --- */}
      {(mode===MODE_WELCOME || mode===MODE_READ)
        && <ReadContents content={content}></ReadContents> /* ReadContent에는 content만 넘겨주면 됨 */}
      {mode===MODE_CREATE && <></>}
      {mode===MODE_UPDATE && <></>}
      {mode===MODE_DELETE && <></>}
    </div>
  );
}

export default App;
