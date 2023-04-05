import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { vansLoader } from "./pages/Vans/Vans";
import { vanLoader } from "./pages/Vans/VanDetail/VanDetailPage";

import PageNotFound from "./pages/PageNotFound";
import VansError from "./pages/Vans/VansError";

const RootLayout = lazy(() => import("./Layout/RootLayout"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Vans = lazy(() => import("./pages/Vans/Vans"));
const VanDetailPage = lazy(
  () => import("./pages/Vans/VanDetail/VanDetailPage")
);
const Login = lazy(() => import("./pages/Login/Login"));
const Host = lazy(() => import("./Layout/HostLayout"));
const MyPage = lazy(() => import("./pages/Login/MyPage"));
const Dashboard = lazy(() => import("./pages/Host/Dashboard/DashboardHost"));
const VansList = lazy(() => import("./pages/Host/Vans/VansListHost"));
const Income = lazy(() => import("./pages/Host/Income/IncomeHost"));
const Reviews = lazy(() => import("./pages/Host/Reviews/ReviewsHost"));
const VansDetailHost = lazy(
  () => import("./pages/Host/Vans/VansDetail/VansDetailHost")
);
const VanHostLayout = lazy(() => import("./Layout/VanHostLayout"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <RootLayout />
          </Suspense>
        }
      >
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
              <VanDetailPage />
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
        >
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<>...</>}>
                <Dashboard />
              </Suspense>
            }
            loader={vansLoader}
          />

          <Route
            path="income"
            element={
              <Suspense fallback={<>...</>}>
                <Income />
              </Suspense>
            }
            loader={vansLoader}
          />

          <Route
            path="reviews"
            element={
              <Suspense fallback={<>...</>}>
                <Reviews />
              </Suspense>
            }
          />

          <Route
            path="vans"
            element={
              <Suspense fallback={<>...</>}>
                <VansList />
              </Suspense>
            }
            loader={vansLoader}
          />

          <Route
            path="vans/:id"
            element={
              <Suspense fallback={<>...</>}>
                <VansDetailHost />
              </Suspense>
            }
            loader={vanLoader}
            errorElement={<VansError />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
