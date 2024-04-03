import React, { useContext } from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import './Navbar.css';
import { ThemeContext } from '../../lib/ThemeProvider';
import NavbarLink from '../NavbarLink/NavbarLink';
import { iconImg } from '../../lib/IconDictionary';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`primary-nav primary-nav--${theme}`}>
      <div className="primary-nav-container">
        <a className="primary-nav-logo-title" href="/">
          {iconImg}
          <p className="primary-nav-title">Eric Hsu</p>
        </a>

        <div className="primary-nav-links">
          <NavbarLink />
          <ThemeToggleButton class="theme-toggle-btn" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
