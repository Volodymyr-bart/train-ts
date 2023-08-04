import { FC } from "react";
import { IUser } from "../../types/interface";
import { UserItemStyled } from "./UserItem.styled";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <UserItemStyled onClick={() => onClick(user)}>{user.name}</UserItemStyled>
  );
};

export default UserItem;
