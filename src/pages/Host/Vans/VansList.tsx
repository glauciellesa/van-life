import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { Van } from "../../../models/Van";

const VansList = () => {
  const vans = useLoaderData() as Array<Van>;
  console.log(vans);
  return (
    <StyledList>
      <p>Your listed vans</p>
      {vans.map((van) => {
        return (
          <div className="vans_list" key={van.id}>
            <img src={`/img/${van.img}.png`} alt={`${van.product}'s photo`} />
            <div>
              <p className="title_detail">{van.product}</p>
              <p className="detail">${van.price} /day</p>
            </div>
          </div>
        );
      })}
    </StyledList>
  );
};

export default VansList;

const StyledList = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;

  .vans_list {
    padding: 1rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
    background-color: #fff;
  }

  img {
    width: 5rem;
    border-radius: 0.3rem;
  }
  .title_detail {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .detail {
    color: #4d4d4d;
    font-size: 1rem;
  }
`;
