import { Van } from "@/models/Van";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const van: Van = useOutletContext();

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
