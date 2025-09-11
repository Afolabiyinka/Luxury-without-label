import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    const body = document.body;
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    // localStorage.setItem("lstheme", theme);
  }

  useEffect(() => {
    changeTheme();
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("lstheme");
    setTheme(storedTheme);
  }, []);

  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
