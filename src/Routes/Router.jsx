import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
    ],
  },
]);
