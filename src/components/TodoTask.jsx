import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo,deleteTodo } from '../features/Todo/todoSlice';

function TodoTask(props) {
  const todo=props.todo;
  const dispatch=useDispatch();
  const [input,setInput]=useState("");
  const deleteTask=(id)=>{
    dispatch(deleteTodo(id))
  }
  const editTask=(id,text)=>{
    dispatch(updateTodo(id,text));
    setInput("");
  }
  return (
    <div style={{width:"500px",height:"40px",margin:"5px auto",color:"white",display:"flex",justifyContent:"space-between"}}>
      <input style={{width:"60%",backgroundColor:"white",color:"black"}} value={todo.text} onChange={(e)=>setInput(e.target.value)}></input>
      <button style={{border:"2px solid white",padding:"2px"}} onClick={()=>editTask(todo.id,input)}>Edit Todo</button>
      <button style={{border:"2px solid white",padding:"2px"}} onClick={()=>deleteTask(todo.id)}>Delete Todo</button>
    </div>
  )
}

export default TodoTask
