import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { vansLoader } from "./pages/Vans/Vans";
import PageNotFound from "./pages/PageNotFound";
import { vanLoader } from "./pages/Vans/VanDetail/VanDetail";
import VansError from "./pages/Vans/VansError";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Vans = lazy(() => import("./pages/Vans/Vans"));
const VanDetail = lazy(() => import("./pages/Vans/VanDetail/VanDetail"));
const Login = lazy(() => import("./pages/Login/Login"));
const Host = lazy(() => import("./pages/Host/Host"));
const MyPage = lazy(() => import("./pages/Login/MyPage"));
const Dashboard = lazy(() => import("./pages/Host/Dashboard/Dashboard"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<>...</>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="vans"
          element={
            <Suspense fallback={<>...</>}>
              <Vans />
            </Suspense>
          }
          loader={vansLoader}
        />
        <Route
          path="vans/:id"
          element={
            <Suspense fallback={<>...</>}>
              <VanDetail />
            </Suspense>
          }
          loader={vanLoader}
          errorElement={<VansError />}
        />

        <Route
          path="login"
          element={
            <Suspense fallback={<>...</>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="mypage"
          element={
            <Suspense fallback={<>...</>}>
              <MyPage />
            </Suspense>
          }
        />
        <Route
          path="host"
          element={
            <Suspense fallback={<>...</>}>
              <Host />
            </Suspense>
          }
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<>...</>}>
              <Dashboard />
            </Suspense>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
