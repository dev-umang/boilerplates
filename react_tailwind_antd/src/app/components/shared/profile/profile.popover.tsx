import { Avatar, Button, Divider, Dropdown } from "antd";
import { CSSProperties, FC } from "react";
import { Menus } from "@common/constants";
import { useTheme } from "@configs/theme";

const ProfilePopover: FC = () => {
  const { color, token } = useTheme();

  const ProfileHeader = (
    <div className="flex items-center gap-2 p-2 border-b border-slate-500/50">
      <Avatar
        shape="square"
        size={"large"}
        style={{ background: color.activeAlpha, color: color.bodyPrimaryText }}
        className="font-bold"
      >
        UG
      </Avatar>
      <div>
        <h2 className="text-[16px]/4 font-semibold line">Display Name</h2>
        <span className="text-[12px]">name@organization.com</span>
      </div>
    </div>
  );

  const contentStyle: CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  return (
    <Dropdown
      trigger={["click"]}
      menu={{ items: Menus.profile }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {ProfileHeader}
          <Divider style={{ margin: 0 }} />
          {menu}
        </div>
      )}
    >
      <Button
        shape="circle"
        icon={<Avatar style={{ background: color.active }}>UG</Avatar>}
      />
    </Dropdown>

    // <Popover
    //   styles={{ body: { padding: 0 } }}
    //   trigger={["click"]}
    //   placement="bottomRight"
    //   content={content}
    //   arrow={false}
    // >
    //   <Button
    //     shape="circle"
    //     icon={<Avatar style={{ background: color.active }}>UG</Avatar>}
    //   />
    // </Popover>
  );
};

export default ProfilePopover;
