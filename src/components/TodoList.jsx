/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/features/todo/todoSlice";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((elem) => (
        <>
          <li key={elem.id}>{elem.text}</li>
          <button onClick={() => dispatch(removeTodo(elem.id))}>Delete</button>
        </>
      ))}
    </div>
  );
};

export default TodoList;
