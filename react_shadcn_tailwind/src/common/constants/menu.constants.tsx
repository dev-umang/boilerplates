import { Home, LayoutDashboard } from "lucide-react";
import { ReactNode } from "react";
import { MenuItem } from "@common/types";
import { Path } from "@configs/routes";

const m = (href: Path, label: string, Icon: ReactNode): MenuItem => ({
  key: href,
  href,
  label,
  icon: Icon,
});

export const Menu = {
  sideNav: [
    m("/", "Root", <LayoutDashboard />),
    m("/home", "Home", <Home />),
  ] as MenuItem[],
};
