import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <h2>Page not found!</h2>
      <p>
        Go to <Link to="/">Homepage</Link>.
      </p>
    </StyledPageNotFound>
  );
};

export default PageNotFound;

const StyledPageNotFound = styled.div`
  padding: 1.3rem;
  h2 {
    color: #e17654;
    font-weight: bold;
    size: 1.5rem;
    padding: 2rem 1rem;
  }
  p {
    color: #161616;
    font-weight: 500;
    text-align: justify;
  }
`;
