import React, { useContext, useEffect } from 'react';
import './AlterModal.css';
import { closeIcon } from '../../lib/IconDictionary';
import { ThemeContext } from '../../lib/ThemeProvider';

const AlterModal = ({
  title,
  message,
  closeHandler
}) => {
  const [startFadeOut, setStartFadeOut] = React.useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {

    // Fade out the alert modal after 5 seconds
    // and close the modal after 2 seconds (total 7 seconds)
    const timer = setTimeout(() => {
      setStartFadeOut(true);

      setTimeout(() => {
        closeHandler();
      }, 2000);
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`alert-modal alert-modal--${theme}
      ${startFadeOut ? 'alert-modal--fade-out' : ''}
    `}>
      <button
        className={`alert-modal-close-button alert-modal-close-button--${theme}`}
        onClick={closeHandler}
      >
        {closeIcon}
      </button>
      <div className="alert-modal-content">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div >
  );
}

export default AlterModal;
