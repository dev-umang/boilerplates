import { Layout } from "antd";
import { FC, useEffect } from "react";
import { useNav } from "@common/hooks";
import { AppSpinner } from "@components/shared";

const { Content } = Layout;

const SplashPage: FC = () => {
  const nav = useNav();

  useEffect(() => {
    setTimeout(() => {
      nav("/login");
    }, 4000);
  }, []);

  return (
    <Layout>
      <Content className="h-screen flex items-center justify-center">
        <AppSpinner />
      </Content>
    </Layout>
  );
};

export default SplashPage;
