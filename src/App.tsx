import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./Layout/RootLayout";
import About from "./pages/About/About";
import Vans, { vansLoader } from "./pages/Vans/Vans";
import PageNotFound from "./pages/PageNotFound";
import VanDetail, { vanLoader } from "./pages/Vans/VanDetail/VanDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route path="vans/:id" element={<VanDetail />} loader={vanLoader} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
