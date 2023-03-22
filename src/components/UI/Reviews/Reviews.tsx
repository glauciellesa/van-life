import { Review } from "@/models/Review";
import styled from "styled-components";
import Date from "../Date/Date";
import StarRating from "./StarRating";

const Reviews = ({ reviewsList }: { reviewsList: Review[] }) => {
  return (
    <StyledReview>
      <p className="review_title">Reviews ({reviewsList.length})</p>
      {reviewsList.map((review) => {
        return (
          <div key={review.id}>
            <div className="review_star">
              <StarRating rating={review.rating} />
            </div>
            <div className="review_name">
              {review.name}
              <Date date={review.date} />
            </div>

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
  .review_title {
    font-size: 1.2rem;
    font-weight: 700;
    padding-top: 1rem;
  }
  p {
    margin: 0.8rem 0;
  }
  .review_name {
    margin: 0.8rem 0;
    font-weight: 600;
    display: flex;
    gap: 0.5rem;
  }
`;
