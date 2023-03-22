import Title from "@/components/UI/Title/Title";
import { Van } from "@/models/Van";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Income = () => {
  let recived = 2260;
  const vans = useLoaderData() as Array<Van>;
  return (
    <StyledIncome>
      <div className="income_title">
        <Title>Income</Title>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <p className="income_recived">${recived.toLocaleString("en-US")}</p>
    </StyledIncome>
  );
};

export default Income;

const StyledIncome = styled.div`
  padding: 1rem;
  .income_title {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #4d4d4d;
    span {
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 0.2rem;
    }
  }

  .income_recived {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;
