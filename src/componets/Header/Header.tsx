import { FC } from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./Header.styled";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <NavLink to={"/users"}>Users</NavLink>
      {/* <NavLink to={"/todos"}>All todos</NavLink> */}
    </HeaderContainer>
  );
};

export default Header;
