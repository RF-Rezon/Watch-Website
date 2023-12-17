import { createBrowserRouter } from "react-router-dom";
import App from "../BasicLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Hi this is from middle</h1>,
      },
    ],
  },
]);
