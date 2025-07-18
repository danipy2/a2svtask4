import { useState } from 'react';
import type{Dispatch,SetStateAction}  from 'react';
import TodoServices from '../TypeScriptServices/TsServices';
import type { types } from '../TypeScriptServices/Type';
import "../css/todoform.css"
 interface ty {
    setTodos:Dispatch <SetStateAction<types[]>>
 }
export  const TodoForm :React.FC<ty>= ({setTodos}) => {
    const [newTodoText,setenewTodoText] = useState<string>("");
    const handleAddTodo = () => {
        if (newTodoText.trim() != ""){
            const newTodo = TodoServices.additems(newTodoText);
            if (newTodo!=null)
            setTodos((prevTodo) => [...prevTodo,newTodo]);
            setenewTodoText("");
        }
    }
    return  (
        <div className='inputForm'>
            <input type="text" value = {newTodoText}
            onChange={(e)=>setenewTodoText(e.target.value)}
            autoFocus = {true}
            placeholder="let's add taks"/>
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}
