import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
