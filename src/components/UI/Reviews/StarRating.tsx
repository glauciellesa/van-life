import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Star = () => {
  return (
    <StyledStar>
      {[...Array(5)].map((star) => {
        return (
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
        );
      })}
    </StyledStar>
  );
};

export default Star;

const StyledStar = styled.div`
  color: #ff8c38;
  font-size: 0.8rem;
  padding: 1rem 0;
  display: flex;
  gap: 0.2rem;
`;
