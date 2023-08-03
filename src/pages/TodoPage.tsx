import axios from "axios";
import { useState, useEffect } from "react";
import List from "../componets/List";
import TodoItem from "../componets/TodoItem";
import { ITodo } from "../types/types";

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [limitTodos, setLimitTodos] = useState<number>(10);
  async function fetchTodos(limit: number) {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodos(limitTodos);
  }, [limitTodos]);
  return (
    <>
      <List
        title="Todos"
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </>
  );
};

export default TodoPage;
