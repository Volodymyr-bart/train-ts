import { useAppDispatch } from "../hooks/hook";
import { FC } from "react";
import { ITodo } from "../types/types";
import { toggleComplete, removeTodo } from "../store/Todos/todosSlice";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo: { id, completed, title } }) => {
  const dispatch = useAppDispatch();
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // Обробка зміни стану при зміні значення checkbox
  //   // Ви можете виконати необхідні дії при зміні стану todo.completed тут
  //   console.log(event.target.checked);
  // };
  return (
    // <li>
    //   <input type="checkbox" checked={todo.completed} onChange={handleChange} />
    //   {todo.title}
    // </li>
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
