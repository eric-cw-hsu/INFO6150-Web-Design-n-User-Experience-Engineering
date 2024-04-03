import React, { useContext } from 'react';
import { ThemeContext } from '../../lib/ThemeProvider';
import './ThemeToggleButton.css';
import { moonIcon, sunIcon } from '../../lib/IconDictionary';


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`theme-toggle-btn theme-toggle-btn--${theme}`} onClick={toggleTheme}>
      {theme === 'dark'
        ? sunIcon
        : moonIcon
      }
    </button >
  );
}

export default ThemeToggleButton;
