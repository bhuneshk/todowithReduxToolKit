import { useSelector } from "react-redux"
import AddTask from "./components/AddTask"
import TodoTask from "./components/TodoTask"


function App() {
  const todos=useSelector(state=>state.todos);
  return (
    <>
      <h1 className="text-3xl" style={{width:"500px",margin:"10px auto",textAlign:"center"}}>TODO LIST</h1>
      <AddTask/>
      {todos.length && todos.map((todo)=><TodoTask todo={todo}/>)}
    </>
  )
}

export default App
