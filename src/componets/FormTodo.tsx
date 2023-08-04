import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/hook";
import { addNewTodo } from "../store/User/actions";

interface FormTodoProps {
  userId: number;
}

const FormTodo: FC<FormTodoProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const handleAction = () => {
    if (!userId) return;
    if (!value.trim().length) return;
    dispatch(addNewTodo(value));    
    setValue("");
  };
  return userId ? (
    <label>
      <input
        placeholder="new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  ) : (
    <></>
  );
};

export default FormTodo;
