import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  color: string;
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
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem;
  font-size: 1rem;
  font-weight: bold;
`;
