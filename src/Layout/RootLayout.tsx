import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Menu/Navbar";

const RootLayout = () => {
  return (
    <StyledRootLayout>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </StyledRootLayout>
  );
};

export default RootLayout;

const StyledRootLayout = styled.div`
  height: 100vh;
  main {
    min-height: calc(100% - 7rem);
  }
`;
