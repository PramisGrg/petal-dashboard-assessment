import ContainerLayout from "@/layout/container-layout";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../topbar/topbar";

const SidebarLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ContainerLayout>
        <Topbar />
        <Outlet />
      </ContainerLayout>
    </SidebarProvider>
  );
};

export default SidebarLayout;
