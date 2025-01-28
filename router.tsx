import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);
