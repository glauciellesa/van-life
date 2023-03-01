import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Ⓒ 2022 #VANLIFE</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #252525;
  color: #aaaa;
  padding: 2rem;
  text-align: center;
`;
