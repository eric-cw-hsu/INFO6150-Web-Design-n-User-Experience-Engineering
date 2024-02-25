class FormValidator {
  constructor() {
    this.form = document.querySelector("#subscribe-form");
    this.email = document.querySelector("#email");
    this.emailConfirm = document.querySelector("#email-confirm");
  }

  validateRequired = (value) => {
    return value !== '' && value != 'undefined' && value != null;
  }

  validateEmail = (email) => {
    return email.includes('@');
  }

  validateConfirmEmail = (email, confirmEmail) => {
    return email === confirmEmail;
  }

  toggleError = (field) => {
    field.classList.toggle('error-field');
  }

  injectErrorMessage = (field, message) => {
    field.insertAdjacentHTML('afterend', `<div></div><div class="form-error-message">${message}</div>`);
  }

  formErrorHandler = (field, message) => {
    this.toggleError(field);
    this.injectErrorMessage(field, message);
  }

  removeErrorMessages = (selector) => {
    if (document.querySelector(`${selector} ~ .form-error-message`) !== null) {
      document.querySelector(`${selector} ~ .form-error-message`).remove();
    }
  }

  removeErrorHandler = (selector) => {
    this.removeErrorMessages(selector);
    this.removeErrorEffects(selector);
  }

  removeErrorEffects = (selector) => {
    document.querySelector(selector).classList.remove("error-field");
  }

  validateEmailField = () => {
    this.removeErrorHandler("#email");

    const emailField = document.querySelector("#email");
    if (!this.validateRequired(emailField.value)) {
      this.formErrorHandler(emailField, "This field is required");
      return false;
    }

    if (!this.validateEmail(emailField.value)) {
      this.formErrorHandler(emailField, "This field be a valid email address including a @");
      return false;
    }

    return true;
  }

  validateEmailConfirmField = () => {
    this.removeErrorHandler("#email-confirm");

    const emailField = document.querySelector("#email");
    const emailConfirmField = document.querySelector("#email-confirm");
    if (!this.validateConfirmEmail(emailField.value, emailConfirmField.value)) {
      this.formErrorHandler(emailConfirmField, "This Field must match the provided email address");
      return false;
    }

    return true;
  }

  validate = () => {
    const validateList = [
      this.validateEmailField,
      this.validateEmailConfirmField
    ];

    let isValid = true;
    validateList.forEach((validate) => {
      if (!validate()) {
        isValid = false;
      }
    });

    return isValid;
  }
}