import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import AlertModal from '../AlertModal/AlertModal';

const Contact = () => {

  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FadeInWrapper>
        <div id="contact" className="contact-container section-container">
          <h2>Contact me</h2>
          <ContactForm setShowModal={setShowModal} setModalMessage={setModalMessage} />
        </div>
      </FadeInWrapper>

      {showModal && <AlertModal title="Contact me" message={modalMessage} closeHandler={() => { setShowModal(false) }} />}
    </>

  );
}

export default Contact;