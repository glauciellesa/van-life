import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Pricing = () => {
  const van = useLoaderData() as Van;

  return (
    <StyledPricing>
      <p className="detail">
        <span>${van.price} </span>/day
      </p>
    </StyledPricing>
  );
};

export default Pricing;

const StyledPricing = styled.div`
  padding: 1rem 0;
  .detail span {
    font-size: 2rem;
    font-weight: 600;
  }
`;
