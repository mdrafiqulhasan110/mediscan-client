import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import AddBannerPage from "../Pages/AddBannerPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllUsersPage from "../Pages/AllUsersPage";
import AllBannerPage from "../Pages/AllBannerPage";
import UpdateBannerPage from "../Pages/UpdateBannerPage";
import ProfilePage from "../Pages/ProfilePage";
import UpdateProfilePage from "../Pages/UpdateProfilePage";
import AddTestPage from "../Pages/AddTestPage";
import AllTestPage from "../Pages/AllTestPage";
import UpdateTestPage from "../Pages/UpdateTestPage";
import TestPage from "../Pages/TestPage";
import TestDetailsPage from "../Pages/TestDetailsPage";
import AllReservationPage from "../Pages/AllReservationPage";

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
        path: "/alltests",
        element: <TestPage></TestPage>,
      },
      {
        path: "/testdetails/:id",
        element: <TestDetailsPage></TestDetailsPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "profile",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "addbanner",
        element: <AddBannerPage></AddBannerPage>,
      },
      {
        path: "alltests",
        element: <AllTestPage></AllTestPage>,
      },
      {
        path: "allreservations",
        element: <AllReservationPage></AllReservationPage>,
      },
      {
        path: "addtest",
        element: <AddTestPage></AddTestPage>,
      },
      {
        path: "updatetest/:id",
        element: <UpdateTestPage></UpdateTestPage>,
      },
      {
        path: "allusers",
        element: <AllUsersPage></AllUsersPage>,
      },
      {
        path: "allbanners",
        element: <AllBannerPage></AllBannerPage>,
      },
      {
        path: "updatebanner/:id",
        element: <UpdateBannerPage />,
      },
      {
        path: "updateprofile",
        element: <UpdateProfilePage />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
