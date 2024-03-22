import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import DetailsPage from "../Pages/DetailsPage";

export default function RouterWrapper() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/details/:countryCode",
        element: <DetailsPage />,
      },
    ],
    { basename: "/world-api" }
  );
  return <RouterProvider router={router} />;
}
