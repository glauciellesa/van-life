import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Star = ({ rating }: any) => {
  return (
    <StyledRating>
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} className={index < rating ? "clickedStar" : ""}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        );
      })}
    </StyledRating>
  );
};

export default Star;

const StyledRating = styled.div`
  color: #4d4d4d26;
  font-size: 0.8rem;
  padding-top: 0.8rem;
  padding-left: 0.3rem;
  display: flex;
  gap: 0.2rem;
  .clickedStar {
    color: #ff8c38;
  }
`;
