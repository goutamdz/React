import { atomFamily } from "recoil"
import {TODOS} from '../utils/todos'

const todosFamily=atomFamily({
    key: 'todosFamily',
    default: id=>{return TODOS.find(todo=>todo.id===id)}
})

export default todosFamily;