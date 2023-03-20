import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { Van } from "../../../models/Van";

const VansList = () => {
  const vans = useLoaderData() as Array<Van>;
  console.log(vans);
  return vans.map((van) => {
    return (
      <StyledList key={van.id}>
        <img src={`/img/${van.img}.png`} alt={`${van.product}'s photo`} />
        <div>
          <p className="title_detail">{van.product}</p>
          <p className="detail">${van.price} /day</p>
        </div>
      </StyledList>
    );
  });
};

export default VansList;

const StyledList = styled.div`
  height: 102px;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
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
