import './App.css'
import Clock from './components/Clock';
import { useRef, useState } from 'react';


function App() {
  let x=useRef(0);
  let btnRef=useRef();
  let [count,setCount]=useState(0);

  function handleInc(){
    // x.current=x.current+1;
    x.current=x.current+1;
    setCount(count+1);
  }

  function changeColor(){
    btnRef.current.style.backgroundColor="red";
  }

  return (
    <>
      <p>Count :{count}</p>
      <p>UseRef is : {x.current}</p>
      <button onClick={handleInc} ref={btnRef}>Increase</button><br></br><br/>
      <button onClick={changeColor}>ChangePrevbtn color</button>

      <Clock/>
    </>
  )
}

export default App
