import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // This component is a placeholder for a theme provider.
  // It will provide the theme to all components in the app.
  // The theme can be accessed by any component using the useContext hook.
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export default ThemeProvider;
export { ThemeContext, ThemeProvider };