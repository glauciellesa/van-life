import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";

import GoBack from "@/components/UI/GoBack/GoBack";

const VansDetailHost = () => {
  const van = useLoaderData() as Van;
  console.log({ van });

  return (
    <>
      <GoBack backTo="/host/vans" />
      <div>{van.img}</div>
    </>
  );
};

export default VansDetailHost;
