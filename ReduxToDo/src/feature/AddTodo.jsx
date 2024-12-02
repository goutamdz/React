import { useState } from "react";
import {addTodo} from "./todoSlice";
import {useDispatch} from 'react-redux'

export default function AddTodo(){
    let [input,setInput]=useState("");
    let dispatch=useDispatch()

    let handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
                <button type="submit">Add TODO</button>
            </form>
        </>
    )
}