import { createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import Categories from './src/pages/Categories';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);
