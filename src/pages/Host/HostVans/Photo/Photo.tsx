import { Van } from "@/models/Van";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const Photo = () => {
  const van: Van = useOutletContext();

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
