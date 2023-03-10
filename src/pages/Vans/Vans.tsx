/* import dreamfinder from "../../img/dreamfinder.png";
import reliableRed from "../../img/reliable_red.png";
import theCruiser from "../../img/the_cruiser.png";
import greenWonder from "../../img/green_wonder.png";
import modestExplorer from "../../img/modest_explorer.png";
import beachBum from "../../img/beach_bum.png";
 */

import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { getVans } from "../../services/VansService";
import CardVan from "./cardVan/CardVan";

type MyLoaderData = {
  map(arg0: (career: any) => void): import("react").ReactNode;
  careers: [];
};

const Vans = () => {
  const vans = useLoaderData() as MyLoaderData;

  return (
    <StyledVans className="vans_container">
      <h1>Explore our van options</h1>

      <div className="vans_cards">
        {vans.map((van) => {
          return (
            <Link to={van.id.toString()} key={van.id}>
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
  padding: 3rem 1rem;

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
  }
  .vans_cards {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
  }
`;

export const vansLoader = async ({ request, params }: any) => {
  console.log({ request, params });
  return getVans();
};
