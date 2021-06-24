import React, { ReactNode, useState } from "react";

function getTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  }

  return "light";
}

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      return document.documentElement.classList.remove("dark");
    }
    setTheme("dark");
    document.documentElement.classList.add("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
