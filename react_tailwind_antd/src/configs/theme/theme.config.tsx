import { ConfigProvider, theme } from "antd";
import { FC, ReactNode } from "react";
import { atomWithStorage } from "jotai/utils";
import useTheme from "./useTheme";

type Props = {
  children: ReactNode;
};

export const AtomDarkMode = atomWithStorage("dark", false);

const ThemeConfig: FC<Props> = ({ children }) => {
  const { darkMode, color: c } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? [theme.darkAlgorithm] : [theme.defaultAlgorithm],
        token: {
          colorPrimary: c.active,
          colorBorderSecondary: c.border,
          colorBgContainer: c.container,
          borderRadius: 4,
        },
        components: {
          Menu: {
            darkItemBg: "transparent",
            darkItemColor: c.bodySecondaryText,
            darkItemHoverColor: c.bodyPrimaryText,
            darkPopupBg: c.container,
            darkSubMenuItemBg: c.bodySecondary,
            activeBarWidth: 4,
            activeBarBorderWidth: 2,
            itemBorderRadius: 0,
            itemMarginInline: 0,
            darkItemSelectedBg: c.activeAlpha,
            darkItemSelectedColor: c.active,
          },
          Layout: {
            headerHeight: "auto",
            colorBgLayout: c.bodyPrimary,
            headerPadding: 0,
            headerBg: c.container,
            siderBg: c.container,
            triggerBg: c.container,
            triggerHeight: 40,
            triggerColor: c.bodySecondaryText,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
