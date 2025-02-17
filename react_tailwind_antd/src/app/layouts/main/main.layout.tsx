import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Menus } from "@common/constants";
import { MainHeader, MainSider } from "@components/shared";

const { Content } = Layout;

const MainLayout: FC = () => (
  <Layout className="h-screen overflow-auto">
    <MainHeader />
    <Layout>
      <MainSider menu={Menus.sider} />
      <Content className="p-4">
        <div>
          <Outlet />
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default MainLayout;
