import { SidebarTrigger } from "../ui/sidebar";
import ActiveRouteIndicator from "./active-route-indicator";
import ProfileSearch from "./profile-search";

const Topbar = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <SidebarTrigger />
        <ActiveRouteIndicator />
      </div>
      <ProfileSearch />
    </section>
  );
};

export default Topbar;
