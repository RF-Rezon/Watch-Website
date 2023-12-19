import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/product",
        element: <Product /> 
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
