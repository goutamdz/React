import { useState } from "react"

function Button({colorx,onClick}){
  return(
    <>
      <div  style={{backgroundColor:colorx}} className="w-1/6 h-full mx-2 rounded-full inline-block" onClick={onClick} ></div>
    </>
  )
}
export default function Bg() {
  let [color,setColor]=useState("tomato");
  let changeColor=(x)=>{
    setColor(x);
  }
  return(
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="w-3/4 bg-red-200 h-20 rounded-xl px-3 py-2 fixed bottom-20 right-20">
        <Button colorx="yellow" onClick={() => setColor("yellow")} />
        <Button colorx="red" onClick={() => setColor("red")}/>
        <Button colorx="green" onClick={() => setColor("green")}/>
        <Button colorx="tomato" onClick={() => setColor("tomato")}/>
        <Button colorx="cyan" onClick={() => setColor("cyan")}/>
      </div>
    </div>
  )
}
