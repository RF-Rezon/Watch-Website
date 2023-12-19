import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import Home from "../Components/Home/Home";
import Product from "../Components/Product/Product";
import ErrorPage from "../Utils/Error/ErrorPage";

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
