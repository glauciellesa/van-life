import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";

import GoBack from "@/components/UI/GoBack/GoBack";
import styled from "styled-components";
import Tag from "@/components/UI/Tag/Tag";

const VansDetailHost = () => {
  const van = useLoaderData() as Van;
  console.log({ van });

  return (
    <>
      <GoBack backTo="/host/vans" />
      <StyledVan>
        <div className="van_container">
          <div className="van_information">
            <img src={`/img/${van.img}.png`} alt={`${van.product}`} />
            <Tag color={van.color}>{van?.type}</Tag>
          </div>
        </div>
      </StyledVan>
    </>
  );
};

export default VansDetailHost;

const StyledVan = styled.div`
  background-color: #ffffff;

  border-radius: 0.3rem;
`;
