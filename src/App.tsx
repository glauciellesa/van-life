import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
  );
  return <RouterProvider router={router} />;
}

export default App;
