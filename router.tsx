import { createBrowserRouter } from "react-router-dom";

import LoginPage from "./src/pages/login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);
