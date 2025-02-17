import { Avatar, Button, Layout, Space } from "antd";
import { Sun } from "lucide-react";
import { FC } from "react";
import { useTheme } from "@configs/theme";

const { Header } = Layout;

const MainHeader: FC = () => {
  const { toggleDarkMode, color } = useTheme();
  return (
    <Header
      className="p-2!"
      style={{ borderBottom: `thin solid ${color.border}` }}
    >
      <div className="flex items-center justify-between px-4 mx-auto">
        <h2 className="text-xl font-black">LOGO</h2>
        <Space>
          <Button
            onClick={toggleDarkMode}
            shape="circle"
            icon={<Sun size={16} />}
          />
          <Button
            shape="circle"
            icon={<Avatar style={{ background: color.active }}>UG</Avatar>}
          />
        </Space>
      </div>
    </Header>
  );
};

export default MainHeader;
