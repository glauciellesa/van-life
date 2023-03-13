import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  color?: string;
}
const Button = (props: ButtonProps) => {
  return (
    <StyledButton style={{ background: props.color }}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.div`
  border-radius: 0.3rem;
  text-align: center;
  border: none;
  padding: 0.35rem 1rem;
  width: fit-content;
`;
