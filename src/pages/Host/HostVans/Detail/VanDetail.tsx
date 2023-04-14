import { Van } from "@/models/Van";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const VanDetail = () => {
  const van: Van = useOutletContext();

  return (
    <StyledVanDetail>
      <p className="title">
        <span>Name: </span>
        {van.product}
      </p>
      <p className="type">
        <span>Category: </span>
        {van.type}
      </p>
      <p className="description">
        <span>Description: </span>
        {van.information}
      </p>
      <p className="visibility">
        <span>Visibility: </span>Public
      </p>
    </StyledVanDetail>
  );
};

export default VanDetail;

const StyledVanDetail = styled.div`
  padding-top: 1rem;
  & p {
    font-size: 1rem;
    font-weight: normal;
    padding-top: 0.5rem;
    & span {
      font-weight: bold;
    }
  }
`;
