import { configureStore } from "@reduxjs/toolkit";
// import todoSlice from "./Todos/todosSlice";
import userSlice from "./User/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    // todos: todoSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
