import { useState } from 'react'
import "./css/App.css"
import Todolist from './Components/typeList'
import { FaPen,FaClipboardList } from 'react-icons/fa'
function App() {


  return (
    <div className='App'>
    <div className="header"/> 
    <div className="logoside">
    <FaPen/>
    <h1> what To Do </h1>
    <FaClipboardList/>
    </div>
    <Todolist/>

    </div>
  )
}

export default App;
