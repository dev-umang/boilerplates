import { useAtom } from "jotai";
import { AtomDarkMode } from "./theme.config";

const useTheme = () => {
  const [darkMode, setDarkMode] = useAtom(AtomDarkMode);

  const toggleTheme = () => setDarkMode((darkMode) => !darkMode);

  return { darkMode, toggleTheme };
};

export default useTheme;
