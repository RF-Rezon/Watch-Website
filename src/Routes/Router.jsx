import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import Header from "../Components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Header />
      },
    ],
  },
]);
