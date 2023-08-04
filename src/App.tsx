import "./App.css";

import UserPage from "./pages/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserItemPage from "./pages/UserItemPage";
import Header from "./componets/Header/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/users"} element={<UserPage />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
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
