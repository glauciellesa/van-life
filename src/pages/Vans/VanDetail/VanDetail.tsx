import { useLoaderData } from "react-router-dom";
import { getVan } from "../../../services/VansService";

const VanDetail = () => {
  const van = useLoaderData();
  console.log({ van });
  return <div>teste</div>;
};

export default VanDetail;

export const vanLoader = async ({ request, params }) => {
  console.log({ request, params });
  return getVan(+params.id);
};
