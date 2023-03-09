import { createSlice } from "@reduxjs/toolkit";
import { defaultEqualityCheck } from "reselect";


export const newTaskSlice = createSlice({
    name: "newTask",
    initialState: {value: ""},
    reducers: {
        newesTask: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {newesTask} = newTaskSlice.actions;
export default newTaskSlice.reducer;