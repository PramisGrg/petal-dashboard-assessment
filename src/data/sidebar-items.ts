import {
  ChartSpline,
  LayoutDashboard,
  ShoppingCart,
  Users,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Customer",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartSpline,
  },
];
