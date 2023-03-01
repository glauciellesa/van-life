import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/">
        <h1>#VANLIFE</h1>
      </NavLink>
      <NavLink to="about"> About</NavLink>
      <NavLink to="about"> Vans</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #fff7ed;
`;
