import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import FirstPage from "../pages/Special";
import SecondPage from "../pages/Main";
import PlaceOrder from "../pages/PlaceOrder";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/main",
        element: <SecondPage />,
      },
    ],
  },
  {
    path: "/place-order",
    element: <PlaceOrder />,
  },
]);

export default routes;
