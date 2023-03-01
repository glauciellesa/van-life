import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
}
const Button = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: #ff8c38;
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
  font-size: 1rem;
  font-weight: bold;
`;
