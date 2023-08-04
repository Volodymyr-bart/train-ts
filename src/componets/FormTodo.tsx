import { FC, useState } from "react";

interface FormTodoProps {
  userId: number;
}

const FormTodo: FC<FormTodoProps> = ({ userId }) => {
  const [value, setValue] = useState<string>("");

  const handleAction = () => {
    if (!userId) return;
    console.log(value, userId);
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
