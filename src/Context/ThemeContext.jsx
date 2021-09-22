import { createContext } from "react";
import { useState } from "react";
export const ThemeContext = createContext("");

function ChangeTheme({ children }) {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const value = { theme, handleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}


export default ChangeTheme;