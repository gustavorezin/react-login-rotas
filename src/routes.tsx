import { createBrowserRouter } from "react-router-dom";
import { NormalPage } from "./pages/app/normal-page";
import { NotFound } from "./pages/not-found";
import { Error } from "./pages/error";
import { AuthLayout } from "./pages/_layouts/auth";
import { AppLayout } from "./pages/_layouts/app";
import { Home } from "./pages/app/home";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { PrivatePage } from "./pages/app/private/private-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "normal-page", element: <NormalPage /> },
      { path: "private-page", element: <PrivatePage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
