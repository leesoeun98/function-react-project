import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SubjectComponent from './components/SubjectComponenet';

function App() {
  const subject={title: "welcome", sub: "World wide web!"}; //상단에, SubjectComponent에
  const welcome={title:"Hello React", desc:"Welcome to react world"}; //클릭시 하단에
  const [mode,setMode]=useState("read");

  return (
    <div className="App">
      <SubjectComponent title={subject.title} sub={subject.sub}>
      </SubjectComponent>
    </div>
  );
}

export default App;
