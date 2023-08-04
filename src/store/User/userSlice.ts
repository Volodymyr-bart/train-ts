import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addNewTodo, deleteTodo, getTodosByUser, getUser, toggleStatus } from "./actions";
import { IUserState } from "../../types/interface";


const initialState: IUserState = {
  id: null,
  name: null,
  username: null,
  email: null,
  address: null,
  loading: false,
  error: null,
  todos: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          // Assuming you are expecting a single user, take the first one
          const user = action.payload[0];
          state.id = user.id;
          state.name = user.name;
          state.username = user.username;
          state.email = user.email;
          state.address = user.address;
          state.loading = false;
          state.error = null;
        }
      })
      .addCase(getTodosByUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.todos = action.payload;
          state.loading = false;
          state.error = null;
        }
      })
      .addCase(addNewTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
