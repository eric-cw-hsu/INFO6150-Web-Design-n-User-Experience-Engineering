import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../lib/ThemeProvider';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer--${theme}`}>
      &copy; {new Date().getFullYear()} Cheng-Wen (Eric) Hsu. All Rights Reserved.
    </footer>
  );
}

export default Footer;