import { useAppDispatch } from "../hooks/hook";
import { FC } from "react";
import { ITodo } from "../types/interface";
import { deleteTodo, toggleStatus } from "../store/User/actions";
// import { removeTodo, toggleComplete } from "../store/Todos/todosSlice";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo: { id, completed, title } }) => {
  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
