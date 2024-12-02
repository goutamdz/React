import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[
        {id:1,text:"First Work"}
    ]
};

let todoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let text=action.payload;
            let id=nanoid();
            state.todos.push({id,text})
        },
        removeTodo:(state,action)=>{
            let id=action.payload;
            state.todos=state.todos.filter(todo=>{todo.id!==id})
        }
    }
})


export const {addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;