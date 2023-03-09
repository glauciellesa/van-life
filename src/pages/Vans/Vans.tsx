/* import dreamfinder from "../../img/dreamfinder.png";
import reliableRed from "../../img/reliable_red.png";
import theCruiser from "../../img/the_cruiser.png";
import greenWonder from "../../img/green_wonder.png";
import modestExplorer from "../../img/modest_explorer.png";
import beachBum from "../../img/beach_bum.png";
 */

import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../services/VansService";

const Vans = () => {
  const vans = useLoaderData();
  console.log({ vans });
  return (
    <div className="vans_container">
      <h1>Explore our van options</h1>
      {vans.map((van) => {
        return (
          <Link to={van.id.toString()} key={van.id}>
            <p> {van.id}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Vans;

export const vansLoader = async ({ request, params }) => {
  console.log({ request, params });
  return getVans();
};
