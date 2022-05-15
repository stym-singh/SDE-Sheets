import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "./Icons";

const ThemeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      size="xl"
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
    />
  );
};

export default ThemeToggle;
