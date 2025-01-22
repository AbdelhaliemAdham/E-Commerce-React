import React, { useState } from "react";

export const ThemeContext = React.createContext({
  darkMode: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState(true);
  function toggleThemeFun() {
    setThemeState((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider
      value={{
        darkMode: themeState,
        toggleTheme: toggleThemeFun,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
