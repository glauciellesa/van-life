import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const HostLayout = () => {
  return (
    <StyledNav>
      <nav className="menu_host">
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </StyledNav>
  );
};

export default HostLayout;

const StyledNav = styled.nav`
  padding-top: 2rem;

  .menu_host a {
    padding: 1rem;
    padding-left: 1rem;
    color: #4d4d4d;
    font-weight: 400;
  }
  .menu_host a.active {
    color: #000;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    width: 50rem;
  }
`;
