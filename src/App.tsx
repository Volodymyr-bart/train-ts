import { useEffect, useState } from "react";
import "./App.css";
import Card, { CardVariant } from "./componets/Card";
// import UserList from "./componets/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./componets/List";
import UserItem from "./componets/UserItem";
import TodoItem from "./componets/TodoItem";

function App() {
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleClick = (count: number) => {
    console.log(count);
  };

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos`
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  return (
    <div>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.primary}
        onClick={handleClick}>
        <button>Button</button>
      </Card>
      <List
        title="Users"
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        title="Todos"
        items={todos.slice(0, 10)}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
      {/* <UserList users={users} /> */}
    </div>
  );
}

export default App;