import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { HomePage, RegisterPage, LoginPage, DashboardPage } from "@pages";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        element: <RegisterPage />,
        path: "/register",
      },
      {
        element: <LoginPage />,
        path: "/login",
      },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        element: <DashboardPage />,
        path: "/dashboard",
      },
    ],
  },
]);
