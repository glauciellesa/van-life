import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";

import GoBack from "@/components/UI/GoBack/GoBack";
import styled from "styled-components";
import Tag from "@/components/UI/Tag/Tag";

const VansDetailHost = () => {
  const van = useLoaderData() as Van;
  console.log({ van });

  return (
    <StyledVan>
      <GoBack backTo="/host/vans" />
      <div className="van_container">
        <div className="van_content">
          <img src={`/img/${van.img}.png`} alt={`${van.product}`} />
          <div className="van_information">
            <Tag color={van.color}>{van?.type}</Tag>
            <p className="van_title">{van.product}</p>
            <p className="van_price">
              ${van.price} <span>/day</span>
            </p>
          </div>
        </div>
      </div>
    </StyledVan>
  );
};

export default VansDetailHost;

const StyledVan = styled.div`
  margin: 1rem;

  .van_container {
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.3rem;
  }

  .van_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 8rem;
  }

  .van_title {
    padding: 1rem 0;
    font-weight: bold;
    font-size: 1.4rem;
  }

  p {
    font-weight: 600;
    font-size: 1.1rem;
  }

  span {
    font-weight: 200;
  }
`;
