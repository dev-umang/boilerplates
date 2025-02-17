import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "@common/constants";
import { AppHeader, AppSidebar } from "@components/shared";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

const MainLayout: FC = () => (
  <div>
    <AppHeader />
    <SidebarProvider className="grid grid-cols-[auto_1fr]">
      <Sidebar collapsible="none" className="border-r">
        <AppSidebar menu={Menu.sideNav} />
      </Sidebar>
      <div className="p-4">
        <Outlet />
      </div>
      {/* </div> */}
    </SidebarProvider>
  </div>
);

export default MainLayout;
