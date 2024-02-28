"use strict";

const validateConfirmEmail = (email, confirmEmail) => {
  return email === confirmEmail;
}

const validateRequiredField = (field) => {
  return (field !== 'undefined' && field !== null && field !== "");
}

const toggleError = (field) => {
  field.classList.toggle('error-field');
}

const injectErrorMessage = (field, message) => {
  field.insertAdjacentHTML('afterend', `<div class="form-error-message"></div><div class="form-error-message">${message}</div>`);
}

const formErrorHandler = (field, message) => {
  toggleError(field);
  injectErrorMessage(field, message);
}

const removeErrorMessages = (selector) => {
  if (document.querySelector(`${selector} ~ .form-error-message`) !== null) {
    document.querySelectorAll(`${selector} ~ .form-error-message`).forEach((errorBlock) => {
      errorBlock.remove();
    });
  }
}

const removeErrorEffects = (selector) => {
  document.querySelector(selector).classList.remove("error-field");
}

const removeErrorHandler = (selector) => {
  removeErrorMessages(selector);
  removeErrorEffects(selector);
}

const validateNameField = () => {
  removeErrorHandler("#name");

  const nameField = document.querySelector("#name");
  if (!validateRequiredField(nameField.value)) {
    formErrorHandler(nameField, "Name is required");
    return false;
  }
  return true;
}

const validateEmailField = () => {
  removeErrorHandler("#email");

  const emailField = document.querySelector("#email");
  if (!validateRequiredField(emailField.value)) {
    formErrorHandler(emailField, "Email is required");
    return false;
  }

  return true;
}

const validateEmailConfirmField = () => {
  removeErrorHandler("#email-confirm");

  const emailField = document.querySelector("#email");
  const emailConfirmField = document.querySelector("#email-confirm");
  if (!validateConfirmEmail(emailField.value, emailConfirmField.value)) {
    formErrorHandler(emailConfirmField, "Confirm Email must match the Email");
    return false;
  }
  return true;
}

const validateTierField = () => {
  removeErrorHandler("#email-confirm");

  const emailField = document.querySelector("#email");
  const emailConfirmField = document.querySelector("#email-confirm");
  if (!validateConfirmEmail(emailField.value, emailConfirmField.value)) {
    formErrorHandler(emailConfirmField, "Confirm Email must match the Email");
    return false;
  }
  return true;
}

const validateForm = () => {

  const validationList = [
    validateNameField,
    validateEmailField,
    validateEmailConfirmField
  ]
  let formIsValid = true;

  validationList.forEach((validationFunction) => {
    if (!validationFunction()) {
      console.log("Form is invalid")
      formIsValid = false;
    }
  });

  return formIsValid;
}

const formSubmitHandler = (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
}

const toggleMobileMenu = () => {
  document.querySelector(".primary-nav__dropdown").classList.toggle("show-menu");
}

const registerListeners = () => {
  document.querySelector("form").addEventListener("submit", formSubmitHandler);
  document.querySelector("#name").addEventListener("blur", validateNameField);
  document.querySelector("#email").addEventListener("blur", validateEmailField);
  document.querySelector("#email-confirm").addEventListener("blur", validateEmailConfirmField);

  document.querySelector(".primary-nav__btn").addEventListener("click", toggleMobileMenu);
}

(function () {
  registerListeners();
})();
