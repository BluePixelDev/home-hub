import { createContext, useContext, type ReactNode } from "react";

interface ThemeProps {
  theme: "dark" | "light";
}

const initialTheme: ThemeProps = {
  theme: "light",
};

const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
