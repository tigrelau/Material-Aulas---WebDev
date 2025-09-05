import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Usuarios from "../pages/Usuarios";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "usuarios",
        element: <Usuarios />,
      },
    ],
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
]);
