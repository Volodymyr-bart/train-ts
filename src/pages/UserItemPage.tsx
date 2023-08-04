import { FC, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { getTodosByUser, getUser } from "../store/User/actions";
import List from "../componets/List/List";
import TodoItem from "../componets/TodoItem";
import { ITodo } from "../types/interface";
import FormTodo from "../componets/FormTodo";

const UserItemPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector((state) => state.user);
  const todos = user?.todos || [];

  useEffect(() => {
    if (id) {
      dispatch(getUser(Number(id)));
      dispatch(getTodosByUser(Number(id)));
    }
  }, [id]);

  return (
    <>
      {user ? (
        <>
          <div>
            <button onClick={() => navigate(`/users`)}>Go back</button>
            <h2>{user.name}</h2>
            <div>{user.email}</div>
            <div>{user.address?.city}</div>
          </div>
          <div>
            <FormTodo userId={Number(id)} />
            <List
              title="Todos"
              items={todos}
              renderItem={(todo: ITodo) => (
                <TodoItem todo={todo} key={todo.id} />
              )}
            />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserItemPage;
