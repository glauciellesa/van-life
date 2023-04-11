import Title from "@/components/UI/Title/Title";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import VansList from "../../../components/VansList/VansList";
import { Van } from "../../../models/Van";

const HostVansList = () => {
  const vans = useLoaderData() as Array<Van>;

  return (
    <StyledList>
      <Title>Your listed vans</Title>
      <VansList vans={vans}></VansList>
    </StyledList>
  );
};

export default HostVansList;

const StyledList = styled.div`
  padding: 1rem;

  a {
    color: #161616;
  }
`;
