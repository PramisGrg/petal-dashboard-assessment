import { createBrowserRouter } from "react-router-dom";
import SidebarLayout from "@/components/sidebar";
import Dashboard from "@/pages/dashboard";
import Products from "@/pages/products";
import Customers from "@/pages/customers";
import Analytics from "@/pages/analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);
