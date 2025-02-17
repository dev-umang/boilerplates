import { ReactNode } from "react";
import { Path } from "@configs/routes";

export type CommonType = Partial<{
  label: string;
  value: string;
  key: string;
  icon: ReactNode;
}>;

export type MenuItem = {
  key: string;
  title?: string; // If title is there, label and href would not be needed.
  label?: string; // If label not provided show the key on screen
  href?: Path | string;
  icon?: ReactNode;
  children?: MenuItem[];
};
