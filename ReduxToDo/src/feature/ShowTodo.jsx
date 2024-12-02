import {useDispatch,useSelector} from 'react-redux';
import {removeTodo} from './todoSlice';

export default function ShowTodo(){

    let todos=useSelector((state,action)=>{return state.ToDo.todos});
    let dispatch=useDispatch();
    let handleDelete=(id)=>{
        dispatch(removeTodo(id));
    }

    return(
        <>
            {
                todos.map((todo)=>{
                    return  <div key={todo.id}>
                        <span>{todo.text}</span>&nbsp;
                        <button onClick={()=>{handleDelete(todo.id)}}>Delete</button>
                    </div>
                })
            }
        </>
    )
}   