import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { Van } from "../../models/Van";
import { getVans, getVansByType } from "../../services/VansService";

import CardVan from "./CardVan/CardVan";
import FilterVans from "./FilterVansData/FilterV";

const Vans = () => {
  const [search, setSearch] = useSearchParams();

  const vans = useLoaderData() as Array<Van>;

  const selectedTypeHandler = (selectedType: string) => {
    setSearch({ type: selectedType });
  };

  return (
    <StyledVans className="vans_container">
      <h1>Explore our van options</h1>
      <div className="filter">
        <FilterVans onSelecteVanType={selectedTypeHandler} />
        <p onClick={() => setSearch({ type: "" })}>Clear filters</p>
      </div>
      <div className="vans_cards">
        {vans.map((van) => {
          return (
            <Link to={van.id?.toString() ?? ""} key={van.id}>
              <CardVan
                img={van.img}
                product={van.product}
                price={van.price}
                type={van.type}
                color={van.color}
              />
            </Link>
          );
        })}
      </div>
    </StyledVans>
  );
};

export default Vans;

const StyledVans = styled.div`
  padding: 3rem 1.2rem;

  h1 {
    padding-top: 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
  }

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    p {
      font-size: 0.8rem;
      color: #4d4d4d;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }

  .vans_cards {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
  }
  @media (min-width: 600px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .vans_cards {
      width: 50rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const vansLoader = async ({ request, params }: any) => {
  const vanType = new URL(request.url).searchParams.get("type");
  if (vanType) {
    return getVansByType(vanType);
  }
  return getVans();
};
