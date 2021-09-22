import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDoList } from "./redux/slices/todoListSlice";

export default function ReduxExample() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDoList());
  }, []);
  const state = useSelector((state) => state.todos);
  console.log("state", state);
  return (
    <div>
      Redux Example<div>ToDo list Data</div>
      {state.loading ? (
        <span>Loading.....</span>
      ) : (
        state.todoList.map((item) => <div>{item.title}</div>)
      )}
    </div>
  );
}
