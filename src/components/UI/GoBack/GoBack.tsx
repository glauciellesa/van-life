import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const GoBack = (props: any) => {
  return (
    <StyledGoBack>
      <NavLink to={props.backTo}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to all vans
      </NavLink>
    </StyledGoBack>
  );
};

export default GoBack;

const StyledGoBack = styled.div`
  padding: 2rem 0;

  a {
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #201f1d;
    text-underline-offset: 0.2rem;
    text-decoration: underline;
  }
`;
