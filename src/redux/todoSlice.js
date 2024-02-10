import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name: "todo",
    initialState:[
        // {
        //     id: Number,
        //     todo: String,
        //     isCompleted: Boolean
        // },
        {
            id: 5,
            todo: "Vazifalarni tekshirish",
            isCompleted: true,
        }
    ],
    reducers: {
        createTodo: (state, action)=>{
            // console.log(action);
            const todo={
                id: action.payload.id,
                todo: action.payload.todo,
                isCompleted: action.payload.isCompleted,
            }
            state=[...state, todo]
            return state
        },
        completeTodo: (state, action)=>{
            console.log(action);
            state=state.filter(el => el.id!=action.payload.id)
            let todoComp=state.filter(el=>el.id==action.payload.id)
            // todoComp.isCompleted=!todoComp.isCompleted
            const newTodo={
                id: action.payload.id,
                todo: action.payload.todo,
                isCompleted: false,
            }
            state=[...state, newTodo]
            return state
        }
    }
})
export default todoSlice