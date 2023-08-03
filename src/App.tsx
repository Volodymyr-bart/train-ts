import "./App.css";

import UserPage from "./pages/UserPage";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodoItemPage from "./pages/TodoItemPage";
import UserItemPage from "./pages/UserItemPage";

function App() {
  // const [count, setCount] = useState(0);

  const handleClick = (count: number) => {
    console.log(count);
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink to={"/users"}>users</NavLink>
        <NavLink to={"/todos"}>todos</NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UserPage />} />
        <Route path={"/todos"} element={<TodoPage />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
        <Route path={"/todos/:id"} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <UserPage />
    //   <EventsExample />
    //   <Card
    //     width="200px"
    //     height="200px"
    //     variant={CardVariant.primary}
    //     onClick={handleClick}>
    //     <button>Button</button>
    //   </Card>

    //   {/* <UserList users={users} /> */}
    // </div>
  );
}

export default App;
