import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const routes = [
  { path: "/", label: "Dashboard" },
  { path: "/products", label: "Products" },
  { path: "/customers", label: "Customers" },
  { path: "/analytics", label: "Analytics" },
];

const BreadCrumbLabel = () => {
  const location = useLocation();

  return (
    <Breadcrumb className="hidden md:block">
      <BreadcrumbList>
        {routes.map((route, index) => {
          const isLast = index === routes.length - 1;
          const isActive = location.pathname === route.path;

          return (
            <div key={route.path} className="flex items-center">
              <BreadcrumbItem>
                {isActive ? (
                  <BreadcrumbPage>{route.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={route.path}>
                    {route.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbLabel;
