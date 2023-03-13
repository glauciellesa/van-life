import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { Van } from "../../../models/Van";
import { getVan } from "../../../services/VansService";

const VanDetail = () => {
  const van = useLoaderData() as Van;

  return (
    <StyledVanDetail>
      <div className="van_img">
        <img src={`/img/${van.img}.png`} alt={`${van.product}`} />
      </div>
      <div className="van_button">
        <Button color={van.color}>{van?.type}</Button>
      </div>
      <div className="van_conteudo">
        <p className="van_title">{van.product}</p>
        <div className="van_price">
          <p>{`$${van.price}`}</p>
          <span>/day</span>
        </div>
        <p className="van_description">{van.information}</p>
      </div>
      <div className="van_rent">
        <Button>Rent this van</Button>
      </div>
    </StyledVanDetail>
  );
};

export default VanDetail;

const StyledVanDetail = styled.div`
  background-color: #fff7ed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  .van_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 1rem 0;
    img {
      width: 24rem;
    }
  }

  .van_button {
    color: #ffead0;
    padding-bottom: 1rem;
  }

  .van_title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .van_price {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .van_description {
    padding: 1rem 0;
    font-size: 0.9rem;
    line-height: 1.3rem;
  }

  .van_rent {
    color: #fff;
    background-color: #ff8c38;
    border-radius: 0.3rem;
    align-content: center;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
  }
`;

export const vanLoader = async ({ request, params }: any) => {
  return getVan(+params.id);
};
