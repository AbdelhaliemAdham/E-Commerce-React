import React, { useState } from "react";

export const ThemeContext = React.createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState(false);
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
