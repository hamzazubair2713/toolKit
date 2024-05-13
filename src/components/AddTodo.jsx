/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";
const AddTodo = () => {
  const [todoVal, setSodoVal] = useState("");
  const dispatch = useDispatch();
  function handelAddTodo(e) {
    e.preventDefault();
    if (!todoVal) return;
    dispatch(addTodo({ text: todoVal }));
    setSodoVal("");
  }
  return (
    <form onSubmit={handelAddTodo}>
      <input
        type="text"
        value={todoVal}
        onChange={(e) => setSodoVal(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
