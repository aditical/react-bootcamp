import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchToDoList = createAsyncThunk(
  "get/todo",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const todoList = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const { data } = todoList;
      return data;
    } catch (error) {
      return error;
    }
  }
);

const todoListSlice = createSlice({
  name: "todos",
  initialState: { todoList: [], loading: false },
  reducers: {},
  extraReducers: {
    [fetchToDoList.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchToDoList.fulfilled]: (state, action) => {
      state.todoList = action.payload;
      state.loading = false;
    },
    [fetchToDoList.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default todoListSlice.reducer;
