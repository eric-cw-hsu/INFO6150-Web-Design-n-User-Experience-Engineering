import React, { useContext, useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import AlertModal from '../AlertModal/AlertModal';
import Button from '../Button/Button';
import ContactModal from './ContactModal';
import { ThemeContext } from '../../lib/ThemeProvider';

const Contact = () => {

  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <FadeInWrapper>
        <div id="contact" className="contact-container section-container">
          <div className="contact-header">
            <h2>Contact me</h2>
            <Button
              visual="button"
              type="button"
              onClickHandler={() => {
                setShowContactForm(true);
              }}
              className={`contact-modal-button contact-modal-button--${theme}`}
            >
              Open Contact Form
            </Button>
          </div>

          <ContactForm setShowModal={setShowModal} setModalMessage={setModalMessage} />
        </div>

      </FadeInWrapper>

      {showModal && <AlertModal title="Contact me" message={modalMessage} closeHandler={() => { setShowModal(false) }} />}

      {showContactForm && <ContactModal
        className="contact-modal"
        setShowContactForm={setShowContactForm}
        setShowModal={setShowModal}
        setModalMessage={setModalMessage}
      />}
    </>

  );
}

export default Contact;