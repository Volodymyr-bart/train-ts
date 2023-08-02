import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Обробка зміни стану при зміні значення checkbox
    // Ви можете виконати необхідні дії при зміні стану todo.completed тут
    console.log(event.target.checked);
  };
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleChange} />
      {todo.title}
    </li>
  );
};

export default TodoItem;
