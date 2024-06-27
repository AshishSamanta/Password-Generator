import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import './data/PassChar.jsx';
import { LC, UC,NC,SC } from './data/PassChar.jsx';
function App() {
  

  let [uppercase,setUppercase]=useState(false);
  let [lowercase,setLowercase]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbols,setSymbols]=useState(false);
  let[passwordlen,setPasswordlen]=useState(10);
  let[fpass,setFpass]=useState("");
  let createPassword =()=>{
    
    let FinalPassWord="";
    let charset="";
    if(uppercase || lowercase || number || symbols){
        if(uppercase) charset+=UC;
        if(lowercase) charset+=LC;
        if(number) charset+=NC;
        if(symbols) charset+=SC;
        for(let i=0;i<passwordlen;i++){
            FinalPassWord+=charset.charAt(Math.floor(Math.random()*charset.length));
        }
        setFpass(FinalPassWord);
    }
    else{
      alert("Please select atleast one check box")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }


  return (
    <div className="password">
      <h2>PassWordGenereator</h2>

      <div className='passwordboxin'>
        <input type="text" readOnly  value={fpass}></input> <button onClick={copyPass}>Copy</button>
      </div>

      <div className='passlength'>
        <label>passWordLength</label>
        <input type="number" max={20} min={8} value={passwordlen} onChange={(e)=>{setPasswordlen(e.target.value)}}></input>
      </div>
 









      <div className='passlength'>
        <label>IncludeUpperCase</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}></input>
      </div>

      <div className='passlength'>
        <label>IncludeLowerCase</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}></input>
      </div>

      <div className='passlength'>
        <label>IncludeNumbers</label>
        <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}></input>
      </div>
      <div className='passlength'>
        <label>ImcludeSymbols</label>
        <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}></input>
      </div>



      <button className='btn' onClick={createPassword}>Generate PassWord</button>
    </div>
  );
}

export default App;
