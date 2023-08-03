import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        userId: 1,
        id: Number(new Date()),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
