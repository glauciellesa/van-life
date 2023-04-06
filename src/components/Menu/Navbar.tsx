import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logog.png";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="menu_logo">
        <NavLink to="/">
          <img src={logo} alt="logo's image" />
        </NavLink>
      </div>
      <nav className="menu_navbar">
        <NavLink to="host/dashboard"> Host</NavLink>
        <NavLink to="about"> About</NavLink>
        <NavLink to="vans"> Vans</NavLink>
        <NavLink to="login">
          <FontAwesomeIcon icon={faCircleUser} />
        </NavLink>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  align-self: center;
  background-color: #fff7ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  height: 3rem;
  box-shadow: 1px 2px 2px hsl(33deg 100% 91% /0.333);

  img {
    width: 6rem;
  }
  .menu_logo a {
    color: #000;
  }

  .menu_navbar a {
    padding-left: 1rem;
    color: #4d4d4d;
  }
  .menu_navbar .active,
  .menu_navbar a:hover {
    color: #000;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
    font-weight: bold;
  }
`;
