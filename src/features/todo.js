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
            const mapping = state.value.map((x) => x.id === action.payload ? { ...x, completed: !x.completed } : x); 
            state.value = mapping;
          },   
        deleteTodos : (state, action) => {
            const deleteTask = state.value.filter((x) => x.id !== action.payload);
            state.value = deleteTask;
  }
    }
})

export const {addTodos, complete, deleteTodos} = todoSlice.actions;

export default todoSlice.reducer;