import { FC, ReactElement, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: ReactElement;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    onClick(count);
  };
  return (
    <div
      onClick={handleClick}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}>
      {children}
    </div>
  );
};

export default Card;
