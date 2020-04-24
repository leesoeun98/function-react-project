import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContents from './components/ReadContents';

function App() {
  let _article;
  const contents=[
    {id:1, title: "HTML", desc:"HTML is HyperText Markup Language"},
    {id:2, title: "CSS", desc:"CSS is for design"},
    {id:3, title: "JavaScript", desc:"JavaScript is for web"},
  ];
  const subject={title: "welcome", sub: "World wide web!"}; //상단에, Subject에
  const welcome={title:"Hello React", desc:"Welcome to react world"}; //클릭시 하단에
  const [mode,setMode]=useState("read");

  const onChangeMode=(e)=> {
    e.preventDefault();
    setMode("welcome");
    console.log(mode);
  }
  if(mode==='read'){

  }
  else if(mode==='welcome'){
    _article=<ReadContents title={welcome.title} desc={welcome.desc}></ReadContents>
  }
  return (
    <div className="App">
      <Subject title={subject.title} sub={subject.sub}
      onChangeMode={onChangeMode}>
      </Subject>
      {_article}
    </div>
  );
}

export default App;
