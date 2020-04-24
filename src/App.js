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
  const [mode,setMode]=useState("welcome");
  const [selected_content_id, setId]=useState(1);

  const [title, setTitle] = useState(welcome.title);
  const [desc, setDesc] = useState(welcome.desc);

  const getReadContents=(contents)=>{
    for(let i=0;i<contents.length;i++){
      const data=contents[i];
      if(data.id===selected_content_id){
        return data;
      }
    }
  }
  
  return (
    <div className="App">
      <Subject title={subject.title} sub={subject.sub} setMode={setMode}></Subject>
      <Toc contents={contents} setMode={setMode}></Toc>
      {(mode==='welcome' || mode==='read') && <ReadContents title={title} desc={desc}></ReadContents>}
      {mode==='create' && <></>}
    </div>
  );
}

export default App;
