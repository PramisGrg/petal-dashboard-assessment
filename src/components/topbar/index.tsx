import { SidebarTrigger } from "../ui/sidebar";
import BreadCrumbLabel from "./breadcrumb-label";
import ProfileSearch from "./profile-search";

const Topbar = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <SidebarTrigger />
        <BreadCrumbLabel />
      </div>
      <ProfileSearch />
    </section>
  );
};

export default Topbar;
