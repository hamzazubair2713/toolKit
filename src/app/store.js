/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

import todoReducers from "../app/features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducers,
});
