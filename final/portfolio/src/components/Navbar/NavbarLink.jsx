import React, { useContext, useState } from 'react';
import './NavbarLink.css';
import useResponsiveDetector from '../../lib/ResponsiveDetector';
import { ThemeContext } from '../../lib/ThemeProvider';
import { closeIcon, menuIcon } from '../../lib/IconDictionary';
import PropTypes from 'prop-types';
import githubWhiteIcon from '../../assets/github-mark-white.png';
import githubBlackIcon from '../../assets/github-mark.png';
import linkedinIcon from '../../assets/linkedin-mark.png';



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
              <a className="nav-links__a" href="/bio" onClick={linkOnClickHandler}>Bio</a>
              <a className="nav-links__a" href="/project" onClick={linkOnClickHandler}>Project</a>
              <a className="nav-links__a" href="/blog" onClick={linkOnClickHandler}>Blog</a>
              <a className="nav-links__a" href="https://www.github.com/eric-cw-hsu">
                {isMobile
                  ? "Github"
                  : <img src={
                    theme === 'dark' ? githubWhiteIcon : githubBlackIcon
                  } alt="github logo" className="nav-links__img" />
                }
              </a>
              <a className="nav-links__a" href="https://www.linkedin.com/in/erichsu1224">
                {isMobile
                  ? "LinkedIn"
                  : <img src={linkedinIcon} alt="linkedin logo" className="nav-links__img" />
                }
              </a>
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
