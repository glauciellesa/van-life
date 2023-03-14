import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  color?: string;
  onClick?: (event: any) => void;
  value?: string;
}
const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      style={{ backgroundColor: props.color }}
      onClick={(e) =>
        props.onClick &&
        props.onClick({ ...e, target: { ...e.target, value: props.value } })
      }
    >
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
