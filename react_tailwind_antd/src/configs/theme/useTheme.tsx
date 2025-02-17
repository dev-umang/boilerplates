import { useCallback, useMemo } from "react";
import { useAtom } from "jotai";
import { Colors } from "./colors";
import { AtomDarkMode } from "./theme.config";

const useTheme = () => {
  const [darkMode, setDarkMode] = useAtom(AtomDarkMode);
  // Switch between dark and light mode.
  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), []);
    
  const color = useMemo(
    () => Colors[darkMode ? "dark" : "light"] ?? {},
    [darkMode],
  );

  return { darkMode, color, toggleDarkMode };
};

export default useTheme;
