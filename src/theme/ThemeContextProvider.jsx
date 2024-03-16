import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
