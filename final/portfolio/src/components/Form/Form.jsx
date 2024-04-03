import React, { useContext, useState } from 'react';
import FormGroup from './FormGroup/FormGroup';
import './Form.css';
import RequiredHintField from './FormGroup/RequiredHintField';
import AlterModal from '../AlertModal/AlterModal';
import { ThemeContext } from '../../lib/ThemeProvider';

const Form = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [errors, setErrors] = useState({});

  const emailUrl = "https://script.google.com/macros/s/AKfycbyePVBDejUDJT6z97Lc92JzofYzkRwDZkV-3P_0fHKWe_d3_0Np-BUwV97o9vllX7_D/exec"

  const fetchEmailService = async () => {
    const res = await fetch(emailUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: name,
        email: email,
        message: message
      })
    })

    if (res.ok) {
      setModalMessage('Thank you for contacting me! I will get back to you as soon as possible.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setModalMessage('There was an error sending your message. Please try again later.');
    }
    setShowModal(true);
  }

  // TODO: Integrate both validate function from FormGroup and current one
  const validate = () => {
    let valid = true;
    let errorObj = {};

    if (name === '') {
      errorObj = { ...errorObj, name: 'Name is required' };
      valid = false;
    }

    if (email === '') {
      errorObj = { ...errorObj, email: 'Email is required' };
      valid = false;
    }

    if (message === '') {
      errorObj = { ...errorObj, message: 'Message is required' };
      valid = false;
    }

    if (email !== '' && RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) === false) {
      errorObj = { ...errorObj, email: 'Please enter a valid email address' };
      valid = false;
    }

    setErrors(errorObj);
    return valid;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (validate()) {
      fetchEmailService();
    }

  }

  return (
    <form className={`form form--${theme}`}>
      <FormGroup label="Name" type="text" name="name" placeholder="Enter your name" required value={name} onChange={setName} errors={errors} setErrors={setErrors} />
      <FormGroup label="Email" type="email" name="email" placeholder="Enter your email" required value={email} onChange={setEmail} errors={errors} setErrors={setErrors} />
      <FormGroup label="Message" type="textarea" name="message" placeholder="Enter your message" required value={message} onChange={setMessage} errors={errors} setErrors={setErrors} />

      <RequiredHintField />

      <button className={`form__submit-button form__submit-button--${theme}`} type="submit" onClick={submitHandler}>Submit</button>

      {showModal && <AlterModal title="Contact me" message={modalMessage} closeHandler={() => { setShowModal(false) }} />}
    </form>
  );
}

export default Form;
