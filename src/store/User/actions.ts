import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITodo } from "../../types/interface";
import { RootState } from "../store";

export const getUser = createAsyncThunk<any, number, { rejectValue: string }>(
  "user/getUser",
  async function (id, { rejectWithValue }) {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users?id=${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue("Server Error!");
    }
  }
);

export const getTodosByUser = createAsyncThunk<
  ITodo[],
  number,
  { rejectValue: string }
>("todos/getTodos", async function (id, { rejectWithValue }) {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );
    return data;
  } catch (error) {
    return rejectWithValue("Server Error!");
  }
});

export const addNewTodo = createAsyncThunk<
  ITodo,
  string,
  { rejectValue: string }
>("todos/addNewTodo", async function (text, { rejectWithValue }) {
  const todo = {
    title: text,
    userId: 1,
    completed: false,
  };

  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    return data;
  } catch (error) {
    return rejectWithValue("Can't add task. Server error.");
  }
});

export const toggleStatus = createAsyncThunk<
  ITodo,
  number,
  { rejectValue: string }
>("todos/toggleStatus", async function (id, { rejectWithValue, getState }) {
  const state = getState() as RootState;
  const todo = state.user.todos.find((todo) => todo.id === id);
  if (todo) {
    try {
      const { data } = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          completed: !todo.completed,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue("Can't toggle status. Server error.");
    }
  }

  return rejectWithValue("No such todo in the list!");
});

export const deleteTodo = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("todos/deleteTodo", async function (id, { rejectWithValue }) {
  try {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (!data) {
      return rejectWithValue("Can't delete task. Server error.");
    }
    return id;
  } catch (error) {
    return rejectWithValue("Can't delete task. Server error.");
  }
});
