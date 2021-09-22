import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoListSlice";
const reducer = {
  todos: todoReducer,
};
const store = configureStore({ reducer });
export default store;
