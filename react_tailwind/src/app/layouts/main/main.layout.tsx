import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./components/main.header";

const MainLayout: FC = () => (
  <div>
    <MainHeader />
    <div className="flex gap-4">
      <div>Sidebar</div>
      <div>
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainLayout;
