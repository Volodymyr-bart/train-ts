import { ReactNode } from "react";
import { ListStyled } from "./List.styled";
interface ListProps<T> {
  title?: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return (
    <>
      {props.title && <h2>{props.title}</h2>}
      <ListStyled>{props.items.map(props.renderItem)}</ListStyled>
    </>
  );
}

// import { FC, ReactNode } from "react";

// interface ListProps<T> {
//   items: T[];
//   renderItem: (item: T) => ReactNode;
// }

// const List = <T extends {}>({ items, renderItem }: ListProps<T>) => (
//   <>{items.map(renderItem)}</>
// );

// export default List;
