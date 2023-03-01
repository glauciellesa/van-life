import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="menu_logo">
        <NavLink to="/">
          <h1>#VANLIFE</h1>
        </NavLink>
      </div>
      <div className="menu_navbar">
        <NavLink to="about"> About</NavLink>
        <NavLink to="about"> Vans</NavLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #fff7ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 3rem;

  .menu_logo a {
    color: #000;
  }

  .menu_navbar a {
    padding-right: 2rem;
    color: #4d4d4d;
  }
`;
