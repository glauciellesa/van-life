import React, { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children?: ReactNode;
}
const Title = (props: TitleProps) => {
  return <StyledTitle> {props.children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  padding: 2rem 0;
  font-size: 1.7rem;
  font-weight: 700;
  color: #161616;
`;
