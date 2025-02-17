import { FC, ReactNode } from "react";
import { useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

type Props = {
  children: ReactNode;
};

export const AtomDarkMode = atomWithStorage("dark", false);

const ThemeConfig: FC<Props> = ({ children }) => {
  const darkMode = useAtomValue(AtomDarkMode);

  return (
    <div
      className={`${darkMode ? "dark" : "light"} bg-background text-foreground min-h-screen`}
    >
      {children}
    </div>
  );
};

export default ThemeConfig;
