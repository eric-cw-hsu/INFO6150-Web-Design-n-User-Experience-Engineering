import React, { useContext, useState } from 'react';
import './NavbarLink.css';
import useResponsiveDetector from '../../lib/ResponsiveDetector';
import { ThemeContext } from '../../lib/ThemeProvider';
import { closeIcon, menuIcon } from '../../lib/IconDictionary';
import PropTypes from 'prop-types';



const NavbarLink = ({ changePage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isMobile = useResponsiveDetector();

  const openNav = () => {
    setNavOpen(true);

    // body overflow hidden
    // TODO: It seams like not a good practice to directly manipulate the DOM
    document.body.style.overflow = 'hidden';
  }

  const closeNav = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      setNavOpen(false);
    }, 1500);

    // body overflow auto
    document.body.style.overflow = 'auto';
  }

  const linkOnClickHandler = (e) => {
    e.preventDefault();
    changePage(e);
    closeNav();
  }


  return (
    <div className="nav-links-container">
      <button className="primary-nav-btn" onClick={openNav}>
        {menuIcon}
      </button>
      {(!isMobile || navOpen)
        ? <div className={`
            nav-links
            ${fadeOut ? "nav-links--fade-out" : ""}
          `}>
          <div className={`nav-links__content nav-links__content--${theme}`}>
            <div className="nav-links__close">
              {isMobile &&
                <button className={`nav-links__close-btn nav-links__close-btn--${theme}`} onClick={closeNav}>
                  {closeIcon}
                </button>
              }
            </div>
            <div className="nav-links__links">
              {isMobile && <a className="nav-links__a" href="/" onClick={linkOnClickHandler}>Home</a>}
              <a className="nav-links__a" href="/project" onClick={linkOnClickHandler}>Project</a>
              <a className="nav-links__a" href="/work" onClick={linkOnClickHandler}>Work</a>
              <a className="nav-links__a" href="https://www.github.com/eric-cw-hsu">Github</a>
              <a className="nav-links__a" href="https://www.linkedin.com/in/erichsu1224">LinkedIn</a>
            </div>
          </div>
        </div>
        : <></>
      }


    </div >
  );
}

NavbarLink.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default NavbarLink;
