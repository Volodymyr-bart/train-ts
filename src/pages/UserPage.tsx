import { useEffect, useState } from "react";
import List from "../componets/List";
import axios from "axios";
import UserItem from "../componets/UserItem/UserItem";
import { IUser } from "../types/interface";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <List
        title="Users"
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
            onClick={(user) => navigate(`/users/${user.id}`)}
          />
        )}
      />
    </>
  );
};

export default UserPage;
