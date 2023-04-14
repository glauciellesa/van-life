import { NavLink } from "react-router-dom";
import styled from "styled-components";

const VanHostLayout = ({ children }: any) => {
  return (
    <StyledVanHost>
      <nav className="menu_host">
        <NavLink to=".">Detail</NavLink>
        <NavLink to="pricing">Pricing</NavLink>
        <NavLink to="photo">Photo</NavLink>
      </nav>
      {children}
    </StyledVanHost>
  );
};

export default VanHostLayout;

const StyledVanHost = styled.nav`
  padding-top: 2rem;

  .menu_host a {
    padding: 0 1rem 0 0;
    color: #4d4d4d;
  }

  .active,
  a:hover {
    color: #000;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
    font-weight: bold;
  }
`;
