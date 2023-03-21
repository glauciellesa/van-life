import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/UI/Footer";
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  header {
    height: 50px;
    flex-shrink: 0;
  }

  main {
    flex: 1 0 auto;
  }

  footer {
    height: 50px;
    flex-shrink: 0;
  }

  @media (min-width: 600px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
