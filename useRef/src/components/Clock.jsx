import { useRef, useState } from "react"

export default function Clock(){
    let [time,setTime]=useState(0);
    let timeRef=useRef();

    function handleStart(){
        //Setinterval return a id by using which we can handle setinterval
        timeRef.current=setInterval(()=>{
            setTime(time=>time+1);
        },1000)
    }

    function handleStop(){
        console.log(timeRef)
        clearInterval(timeRef.current);
    }

    function handleReset(){
        setTime(0);
        timeRef.current=null;
    }

    return(
        <>
            <h1>Time is {time}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

