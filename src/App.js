import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContents from './components/ReadContents';
function App() {
  const subject={title: "welcome", sub: "World wide web!"}; //상단에, Subject에
  const welcome={title:"Hello React", desc:"Welcome to react world"}; //클릭시 하단에
  const [mode,setMode]=useState("read");

  return (
    <div className="App">
      <Subject title={subject.title} sub={subject.sub}>
      </Subject>
      <Toc></Toc>
    </div>
  );
}

export default App;
