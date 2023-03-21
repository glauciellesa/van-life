import Title from "@/components/UI/Title/Title";
import Reviews from "@/components/UI/Reviews/Reviews";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewsPage = () => {
  const qntDays = 30;
  const rating = 5;
  const reviews = [
    {
      id: 1,
      name: "Elliote",
      date: new Date(2022, 12, 1),
      rating: 5,
      comments:
        "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      name: "Sandy",
      date: new Date(2022, 11, 23),
      rating: 4,
      comments:
        "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];

  return (
    <StyledReview>
      <div className="title">
        <Title>Your reviews</Title>
        <p>
          last <span>${qntDays} days</span>
        </p>
      </div>
      <div className="rating">
        <span className="rating_note">{rating}.0</span>
        <span className="rating_star">
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>overall rating</span>
      </div>
      <div className="reviews">
        <Reviews reviewsList={reviews} />
      </div>
    </StyledReview>
  );
};

export default ReviewsPage;

const StyledReview = styled.div`
  padding: 1rem;
  .title {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 0.8rem;
    color: #4d4d4d;

    p {
      padding-left: 0.4rem;
    }
    span {
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }
  .rating {
    color: #161616;
    font-size: 0.8rem;

    .rating_note {
      padding-right: 0.4rem;
      font-size: 1.7rem;
      font-weight: 800;
    }

    .rating_star {
      padding-right: 0.4rem;
      color: #ff8c38;
    }
  }
`;
