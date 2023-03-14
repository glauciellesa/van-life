import { Van } from "../../../models/Van";
import styled from "styled-components";
import Button from "../../../components/Button/Button";

const CardVan = (props: Van) => {
  return (
    <StyledCard>
      <img src={`/img/${props.img}.png`} alt={`${props.product}'s image`} />
      <div className="description">
        <p className="van_name">{props.product}</p>
        <div className="description_price">
          <p className="van_price">{`$${props.price}`}</p>
          <p className="day">/day</p>
        </div>
      </div>
      <div className="van_button">
        <Button color={props.color}>{props.type}</Button>
      </div>
    </StyledCard>
  );
};

export default CardVan;

const StyledCard = styled.div`
  width: 11rem;
  padding: 1rem 0;
  gap: 1rem;

  img {
    width: 11rem;
  }

  .description {
    color: #161616;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
  }

  .van_name {
    padding-top: 0.3rem;
    font-weight: 400;
  }

  .description_price,
  .van_price {
    text-align: end;
  }

  .day {
    font-size: 0.6rem;
  }

  .van_button {
    font-weight: 400;
    font-size: 0.8rem;
    width: 3.5rem;
    color: #ffead0;
  }
`;
