import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{id: nanoid(), task: "IAmHere", completed: false }]

export const todoSlice = createSlice({
    name: "todo",
    initialState: {value: initialState},
    reducers: {
        addTodos : (state, action) => {
            const todo = { id: nanoid(), task: action.payload, completed: false };
            state.value =  [todo, ...state.value];
          },
        complete : (state, action) => {
            const taskCompleted = state.value.map((x) => x.id === action.payload ? { ...x, completed: !x.completed } : x); 
            state.value = taskCompleted;
          },   
        deleteTodos : (state, action) => {
            const taskToDelete = state.value.filter((x) => x.id !== action.payload);
            state.value = taskToDelete;
  },
  editTodos : (state, action) => {
    const editTodoTaskName = state.value.map((x) => x.id === action.payload.id ? { ...x, task: action.payload.task } : x);
    state.value = editTodoTaskName;
  } 
    }
})

export const {addTodos, complete, deleteTodos, editTodos} = todoSlice.actions;

export default todoSlice.reducer;