// import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { addNewTodo, deleteTodo, getTodos, toggleStatus } from "./actions";

// export type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

// export type TodosState = {
//   list: Todo[];
//   loading: boolean;
//   error: string | null;
// };

// const initialState: TodosState = {
//   list: [],
//   loading: false,
//   error: null,
// };

// const todoSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo(state, action: PayloadAction<string>) {
//       state.list.push({
//         userId: 1,
//         id: Number(new Date()),
//         title: action.payload,
//         completed: false,
//       });
//     },
//     toggleComplete(state, action: PayloadAction<number>) {
//       const toggledTodo = state.list.find((todo) => todo.id === action.payload);
//       if (toggledTodo) {
//         toggledTodo.completed = !toggledTodo.completed;
//       }
//     },
//     removeTodo(state, action: PayloadAction<number>) {
//       state.list = state.list.filter((todo) => todo.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTodos.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getTodos.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.loading = false;
//       })
//       .addCase(addNewTodo.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(addNewTodo.fulfilled, (state, action) => {
//         state.list.push(action.payload);
//       })
//       .addCase(toggleStatus.fulfilled, (state, action) => {
//         const toggledTodo = state.list.find(
//           (todo) => todo.id === action.payload.id
//         );
//         if (toggledTodo) {
//           toggledTodo.completed = !toggledTodo.completed;
//         }
//       })
//       .addCase(deleteTodo.fulfilled, (state, action) => {
//         state.list = state.list.filter((todo) => todo.id !== action.payload);
//       })
//       .addMatcher(isError, (state, action: PayloadAction<string>) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });
// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;

// function isError(action: AnyAction) {
//   return action.type.endsWith("rejected");
// }
