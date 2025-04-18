import { sidebarItems } from "@/data/sidebar-items";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const ActiveRouteIndicator = () => {
  const location = useLocation();

  return (
    <ul className="md:flex gap-4 hidden">
      {sidebarItems.map((item) => {
        const isActive = location.pathname === item.url;
        return (
          <li
            className={cn(isActive ? "text-primary" : "text-gray-400")}
            key={item.title}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ActiveRouteIndicator;
