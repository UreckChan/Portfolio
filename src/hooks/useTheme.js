import { useContext } from "react";
import { ThemeContext } from "../context/theme";


export function useTheme() {
    const {theme, setTheme} = useContext(ThemeContext);

  return {theme, setTheme }
};