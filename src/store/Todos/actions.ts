// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { Todo, TodosState } from "./todosSlice";
// import axios from "axios";

// export const getTodos = createAsyncThunk<
//   Todo[],
//   undefined,
//   { rejectValue: string }
// >("todos/getTodos", async function (_, { rejectWithValue }) {
//   try {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos?_limit=10"
//     );
//     return data;
//   } catch (error) {
//     return rejectWithValue("Server Error!");
//   }
// });
// // export const getTodosByUser = createAsyncThunk<
// //   Todo[],
// //   number,
// //   { rejectValue: string }
// // >("todos/getTodos", async function (id, { rejectWithValue }) {
// //   try {
// //     const { data } = await axios.get(
// //       `https://jsonplaceholder.typicode.com/todos?userId=${id}`
// //     );
// //     return data;
// //   } catch (error) {
// //     return rejectWithValue("Server Error!");
// //   }
// // });

// export const addNewTodo = createAsyncThunk<
//   Todo,
//   string,
//   { rejectValue: string }
// >("todos/addNewTodo", async function (text, { rejectWithValue }) {
//   const todo = {
//     title: text,
//     userId: 1,
//     completed: false,
//   };

//   try {
//     const { data } = await axios.post(
//       "https://jsonplaceholder.typicode.com/todos",
//       todo
//     );
//     return data;
//   } catch (error) {
//     return rejectWithValue("Can't add task. Server error.");
//   }
// });

// export const toggleStatus = createAsyncThunk<
//   Todo,
//   number,
//   { rejectValue: string; state: { todos: TodosState } }
// >("todos/toggleStatus", async function (id, { rejectWithValue, getState }) {
//   const todo = getState().todos.list.find((todo) => todo.id === id);

//   if (todo) {
//     try {
//       const { data } = await axios.patch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//         {
//           completed: !todo.completed,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue("Can't toggle status. Server error.");
//     }
//   }

//   return rejectWithValue("No such todo in the list!");
// });

// export const deleteTodo = createAsyncThunk<
//   number,
//   number,
//   { rejectValue: string }
// >("todos/deleteTodo", async function (id, { rejectWithValue }) {
//   try {
//     const { data } = await axios.delete(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );
//     if (!data) {
//       return rejectWithValue("Can't delete task. Server error.");
//     }
//     return id;
//   } catch (error) {
//     return rejectWithValue("Can't delete task. Server error.");
//   }
// });
