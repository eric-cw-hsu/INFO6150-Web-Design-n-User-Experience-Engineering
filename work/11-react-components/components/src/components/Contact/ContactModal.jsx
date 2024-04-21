import React, { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import './ContactModal.css';
import { closeIcon } from '../../lib/IconDictionary';
import Button from '../Button/Button';

const ContactModal = ({ className, setShowContactForm, setShowModal, setModalMessage }) => {

  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current === e.target) {
      setShowContactForm(false);
    }
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowContactForm(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  })

  return (
    <dialog open className={`contact-modal-container ${className}`}
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <div className="contact-modal-content">
        <div className="contact-modal-close">
          <Button
            visual="link"
            type="button"
            onClickHandler={() => setShowContactForm(false)}
          >
            <div className="contact-modal-close-btn">
              {closeIcon}
              <p>close</p>
            </div>

          </Button>
        </div>

        <ContactForm
          setShowModal={setShowModal}
          setModalMessage={setModalMessage}
        />
      </div>
    </dialog>
  );
}

export default ContactModal;
