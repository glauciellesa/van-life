import { Review } from "@/models/Review";
import styled from "styled-components";
import StarRating from "./StarRating";

const Reviews = ({ reviewsList }: { reviewsList: Review[] }) => {
  console.log(reviewsList);
  return (
    <StyledReview>
      {reviewsList.map((review) => {
        return (
          <div key={review.id}>
            <div className="review_star">
              <StarRating />
            </div>
            <p>{review.name}</p>
            <p>{review.comments}</p>
          </div>
        );
      })}
    </StyledReview>
  );
};

export default Reviews;

const StyledReview = styled.div`
  font-size: 0.8rem;
`;
