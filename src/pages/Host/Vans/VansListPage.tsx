import Title from "@/components/UI/Title/Title";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import VansList from "../../../components/VansList/VansList";
import { Van } from "../../../models/Van";

const VansListPage = () => {
  const vans = useLoaderData() as Array<Van>;

  return (
    <StyledList>
      <Title>Your listed vans</Title>
      <VansList vans={vans}></VansList>
    </StyledList>
  );
};

export default VansListPage;

const StyledList = styled.div`
  padding: 1rem;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;

  p {
    margin-bottom: 1rem;
  }
`;
