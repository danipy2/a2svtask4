import {useState} from 'react';
import type {types} from '../TypeScriptServices/Type'
import TodoServices from '../TypeScriptServices/TsServices'
import { FaEdit,FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import {TodoForm} from './todoForm';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import "../css/Todolist.css";
const Todolist = () => {

    const [todos,settodos] = useState<types[]>(TodoServices.getitems())
    const [edited,setEditTodo] = useState <number|null> (null);
    const [editedTodoText,setEditTodoText] = useState<string>("");

    const handleEditStart = (id:number ,text :string)=>{
        setEditTodo(id)
        setEditTodoText(text);
    }
    const handleupdatecancel = ()=>{
        setEditTodo(null)
        setEditTodoText("")}
    const handleupdateSave = (id:number)=>{
        if( editedTodoText.trim()!= ""){
            const update =  TodoServices.update({id,text:editedTodoText.trim()}) 
            settodos((prevtodods)=>prevtodods.map((t)=>t.id===id?update:t))
            handleupdatecancel();
        } 
    }
    const handleDelete = (id:number) => {
        const deleted = TodoServices.delete(id)

        settodos((prevtodods)=>prevtodods.filter((t)=>t.id!==id))
    }
    return (
  <div className="tododContainer">
    <div>
      <TodoForm setTodos={settodos} />
    </div>
    {todos.map((t) => (
      <div className="items" key={t.id}>
        {t.id === edited ? (
          <div className="editedText">
            <input
              type="text"
              value={editedTodoText}
              onChange={(e) => setEditTodoText(e.target.value)}
              autoFocus
            />
            <button onClick={() => handleupdateSave(t.id)}>
              <FaCheck />
            </button>
            <button onClick={handleupdatecancel}>
              <GiCancel />
            </button>
          </div>
        ) : (
          <div className="editBtn">
            <span>{t.text}</span>
            <button onClick={() => handleEditStart(t.id, t.text)}>
              <FaEdit />
            </button>
          </div>
        )}
        <button onClick={() => handleDelete(t.id)}>
          <RiDeleteBin5Fill />
        </button>
      </div>
    ))}
  </div>
);
}
export default Todolist;
