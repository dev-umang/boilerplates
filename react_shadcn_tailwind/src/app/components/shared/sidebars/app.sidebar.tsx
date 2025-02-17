import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@common/types";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type Props = {
  menu: MenuItem[];
};

const AppSidebar: FC<Props> = ({ menu }) => (
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>{"Routes"}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menu.map((item) => (
            <SidebarMenuItem key={item.key}>
              <SidebarMenuButton asChild>
                <Link to={item.href ?? "#"}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
);

export default AppSidebar;
