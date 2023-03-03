import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  color: string;
}
const Button = (props: ButtonProps) => {
  return (
    <StyledButton style={{ backgroundColor: props.color }}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`;
