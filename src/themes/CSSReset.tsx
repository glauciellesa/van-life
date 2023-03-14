import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    &:focus{
      outline: none;
    }
  }
  

  `;
export default CSSReset;
