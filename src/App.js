import './App.css';
import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); 
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor= '#151842';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
   <>
<Router>
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<Routes>   
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>}/>
</Routes>
</div>
</Router>
</>
  );
}

export default App;
