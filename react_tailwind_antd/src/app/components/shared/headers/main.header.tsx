import { Button, Layout, Space } from "antd";
import { Bell, Home, Sun } from "lucide-react";
import { FC } from "react";
import { useTheme } from "@configs/theme";
import { ProfilePopover } from "..";

const { Header } = Layout;

const MainHeader: FC = () => {
  const { toggleDarkMode, color } = useTheme();
  return (
    <Header
      className="p-2!"
      style={{ borderBottom: `thin solid ${color.border}` }}
    >
      <div className="flex items-center justify-between px-4 mx-auto">
        <h2 className="text-xl font-black flex gap-2 items-center">
          {" "}
          <Home className="stroke-2" /> LOGO
        </h2>
        <Space>
          <Button
            onClick={toggleDarkMode}
            shape="circle"
            icon={<Sun size={16} />}
            type="text"
          />
          <Button
            onClick={toggleDarkMode}
            shape="circle"
            icon={<Bell size={16} />}
            type="text"
          />
          <ProfilePopover />
        </Space>
      </div>
    </Header>
  );
};

export default MainHeader;
