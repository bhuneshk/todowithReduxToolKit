import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';

function AddTask() {
  const [input,setInput]=useState('');
  const dispatch=useDispatch();
  const addTask=()=>{
     dispatch(addTodo(input));
     setInput("");
  }


  return (
    <div style={{width:"500px",height:"40px",backgroundColor:"grey",margin:"auto",color:"white",display:"flex",justifyContent:"space-between"}}>
      <input type="text" style={{width:"80%",color:"black"}} value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button style={{border:"2px solid white",padding:"2px"}} onClick={addTask}>Add Task</button>
    </div>
  )
}

export default AddTask
