import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button/Button";

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <p>Sorry, the page you were looking for was not found.</p>
      <div className="error_button">
        <Button>
          <Link to="/"> Return to home</Link>.
        </Button>
      </div>
    </StyledPageNotFound>
  );
};

export default PageNotFound;

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: fit-content;
  p {
    color: #161616;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 2rem 1rem;
  }
  .error_button {
    background-color: #161616;
    border-radius: 0.3rem;
    align-content: center;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
