import { useState } from "react";
import type {types} from "./Type.ts"

const LOCAL_STORAGE_KEY = "TODOLIST"; 


const TodoServices = {
 getitems : (): types[] => {
    const  todolist =  localStorage.getItem(LOCAL_STORAGE_KEY);
    return todolist? JSON.parse(todolist) :  []
},
 update :(todo:types):types => {
    const lists = TodoServices.getitems();
    const updated = lists.map((t)=>t.id==todo.id?todo:t)
    TodoServices.setitems(updated);
    return todo
},

additems :(text:string):types => {
    const lists = TodoServices.getitems();
    const newitems =  {id:lists.length+1,text}
    const updated  = [...lists,newitems]
    TodoServices.setitems(updated);
    return newitems;

},
delete : (id:number):void => {
    const  list = TodoServices.getitems();
    const updated = list.filter((t)=>t.id!=id)
    TodoServices.setitems(updated);
},
setitems :(updated:types[]):void => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updated))
}
}
export default TodoServices;