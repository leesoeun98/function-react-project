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

function App() {
  const [mode, setMode] = useState(MODE_WELCOME);

  return (
    <div className="App">
      {/* changeMode: 그냥 'setMode(...)'가 아니라, arrow function으로 넘겨줄 것 */}
      <Subject changeMode={() => setMode(MODE_WELCOME)}></Subject>
      <Toc changeMode={() => setMode(MODE_READ)}></Toc>
      <Control></Control>
      {(mode===MODE_WELCOME || mode===MODE_READ) && <ReadContents></ReadContents>}
      {mode===MODE_CREATE && <></>}
      {mode===MODE_UPDATE && <></>}
      {mode===MODE_DELETE && <></>}
    </div>
  );
}

export default App;
