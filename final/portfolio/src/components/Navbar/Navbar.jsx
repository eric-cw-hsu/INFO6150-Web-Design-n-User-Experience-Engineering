import React, { useContext } from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import './Navbar.css';
import { ThemeContext } from '../../lib/ThemeProvider';
import NavbarLink from './NavbarLink';
import { iconImg } from '../../lib/IconDictionary';
import PropTypes from 'prop-types';

const Navbar = ({ setPage }) => {
  const { theme } = useContext(ThemeContext);
  const changePage = (e) => {
    e.preventDefault();
    setPage(
      e.target.pathname === undefined
        ? '/'
        : e.target.pathname
    )
  }

  return (
    <nav className={`primary-nav primary-nav--${theme}`}>
      <div className="primary-nav-container">
        <a className="primary-nav-logo-title" href="/" onClick={changePage}>
          <div className={`primary-nav-logo primary-nav-logo--${theme}`}>
            {iconImg}
          </div>
          <p className="primary-nav-title">Eric Hsu</p>
        </a>

        <div className="primary-nav-links">
          <NavbarLink changePage={changePage} />
          <ThemeToggleButton class="theme-toggle-btn" />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar;
