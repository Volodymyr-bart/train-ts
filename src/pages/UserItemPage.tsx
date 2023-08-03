import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";


const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<{ id: string }>(); // Use useParams without specifying a type
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {user ? (
        <div>
          <button onClick={() => navigate(`/users`)}>Go back</button>
          <h2>{user.name}</h2>
          <div>{user.email}</div>
          <div>{user.address.city}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserItemPage;
