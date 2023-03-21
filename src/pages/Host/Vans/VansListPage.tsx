import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import VansList from "../../../components/VansList/VansList";
import { Van } from "../../../models/Van";

const VansListPage = () => {
  const vans = useLoaderData() as Array<Van>;

  return (
    <StyledList>
      <p>Your listed vans</p>
      <VansList vans={vans}></VansList>
    </StyledList>
  );
};

export default VansListPage;

const StyledList = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;
  p {
    margin-bottom: 1rem;
  }
`;
