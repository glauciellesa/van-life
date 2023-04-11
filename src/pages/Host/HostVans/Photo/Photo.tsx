import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Photo = () => {
  const van = useLoaderData() as Van;

  return (
    <StyledImg>
      <img src={`/img/${van.img}.png`} alt={`${van.product}'s photo`} />
    </StyledImg>
  );
};

export default Photo;

const StyledImg = styled.div`
  padding: 2rem 0;
  img {
    width: 6rem;
  }
`;
