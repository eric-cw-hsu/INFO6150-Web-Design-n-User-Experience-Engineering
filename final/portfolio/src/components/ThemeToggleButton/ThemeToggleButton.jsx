import React, { useContext } from 'react';
import { ThemeContext } from '../../lib/ThemeProvider';
import './ThemeToggleButton.css';
import { moonIcon, sunIcon } from '../../lib/IconDictionary';


const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label class="switch">
      <input type="checkbox" onClick={toggleTheme} />
      <span class="slider round">
        <div className={`slider-icon slider-icon-${theme}`}>
          {theme === 'dark'
            ? moonIcon
            : sunIcon}
        </div>
      </span>

    </label>
  )
}

export default ThemeToggleButton;
