import styled from "styled-components";

const Tag = (props: any) => {
  return (
    <StyledTag style={{ backgroundColor: props.color }}>
      {props.children}
    </StyledTag>
  );
};

export default Tag;

const StyledTag = styled.div`
  border-radius: 0.3rem;
  text-align: center;
  border: none;
  padding: 0.3rem 0.5rem;
  width: fit-content;
  color: #fff;
`;
