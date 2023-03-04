import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CSSReset from "./themes/CSSReset";
import GlobalStyle from "./themes/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <CSSReset />
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
);
