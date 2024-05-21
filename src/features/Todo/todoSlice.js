import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[{id:1, text:"Hello world"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(), text:action.payload};
            if(action.payload.length){
            state.todos.push(todo);
            }
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>{
                if (todo.id == action.payload.id){
                    todo.text=action.payload.text;
                }
        })
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id != action.payload);
        }
    }
})

export const {addTodo,updateTodo,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;