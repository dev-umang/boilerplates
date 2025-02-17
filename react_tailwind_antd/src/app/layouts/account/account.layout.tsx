import { Avatar, Card, Menu } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Menus } from "@common/constants";
import { useTheme } from "@configs/theme";

const AccountLayout: FC = () => {
  const { color } = useTheme();

  const ProfileHeader = (
    <div className="flex items-center gap-2 py-2">
      <Avatar
        shape="square"
        size={"large"}
        style={{ background: color.activeAlpha, color: color.bodyPrimaryText }}
        className="font-bold"
      >
        DN
      </Avatar>
      <div>
        <h2 className="text-[16px]/4 font-semibold line">Display Name</h2>
        <span className="text-[12px] text-muted">name@organization.com</span>
      </div>
    </div>
  );
  return (
    <div className="grid grid-cols-[1fr_4fr] gap-4">
      <Card size="small">
        {ProfileHeader}
        <Menu items={Menus.accountPage} />
      </Card>
      <Card size="small">
        <Outlet />
      </Card>
    </div>
  );
};

export default AccountLayout;
