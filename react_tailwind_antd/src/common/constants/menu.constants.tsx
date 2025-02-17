import { MenuProps } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Path } from "@configs/routes";
import { BoxPlotOutlined, HomeOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

type MenuTypes = {
  sider: MenuProps["items"];
  profile: MenuProps["items"];
};

const m = (
  href?: Path,
  label?: ReactNode,
  icon?: ReactNode,
  children?: MenuProps["items"],
): MenuItem => ({
  key: href ?? Math.random(),
  label: href ? <Link to={href}>{label}</Link> : label,
  icon,
  children,
});

const AllPages: MenuItem[] = [
  m("/demo1", "Demo 1"),
  m("/demo2", "Demo 2"),
  m("/demo3", "Demo 3"),
];

export const Menus: MenuTypes = {
  sider: [
    m("/home", "Home", <HomeOutlined />),
    m(undefined, "Demo", <BoxPlotOutlined />, AllPages),
  ],
  profile: [
    m("/home", "Home"),
    ...AllPages,
    m(undefined, <span className="text-red-500">Log Out</span>),
  ],
};
