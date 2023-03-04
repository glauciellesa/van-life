import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Ⓒ 2022 #VANLIFE</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 3rem;
  background-color: #252525;
  color: #aaaaaa;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
