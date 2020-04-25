import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './components/Subject';
import Toc from './components/Toc';
import Control from './components/Control';
import ReadContents from './components/ReadContents';

function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <Toc></Toc>
      <Control></Control>
      <ReadContents></ReadContents>
    </div>
  );
}

export default App;
