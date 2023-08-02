import { FC, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("value", value);
    setValue("");
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
};

export default EventsExample;
