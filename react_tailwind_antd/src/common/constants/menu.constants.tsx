import { MenuProps } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Path } from "@configs/routes";
import { BoxPlotOutlined, HomeOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

type MenuTypes = {
  sider: MenuProps["items"];
  accountPopover: MenuProps["items"];
  accountPage: MenuProps["items"];
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

const g = (
  title: string,
  children: MenuProps["items"],
  fontSize?: 12 | 14,
): MenuItem => ({
  key: title,
  label: title,
  children,
  type: "group",
  style: { fontSize },
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
  accountPopover: [
    { type: "divider" },
    g(
      "Application",
      [
        m("/home", "Home"),
        m("/account/profile", "Profile"),
        m("/account/settings", "Settings"),
      ],
      12,
    ),
    g("Pages", AllPages, 12),
    {
      type: "divider",
    },
    m(undefined, <span className="text-red-500">Log Out</span>),
  ],
  accountPage: [
    { type: "divider" },
    g("Account", [
      m("/account/profile", "Profile"),
      m("/account/settings", "Settings"),
    ]),
  ],
};
