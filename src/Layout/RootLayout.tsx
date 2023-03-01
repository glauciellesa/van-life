import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Menu/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
