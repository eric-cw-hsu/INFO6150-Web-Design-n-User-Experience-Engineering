"use strict";

const formValidator = new FormValidator();

const clearInputFieldValues = () => {
  document.querySelectorAll('.subscribe-popup__input').forEach((input) => {
    input.value = '';
  });
}

const toggleSubscribePopup = () => {
  document.querySelector('.subscribe-popup').classList.toggle('subscribe-popup--active');
}

const closeSubscribePopup = () => {
  document.querySelector('.subscribe-popup').classList.remove('subscribe-popup--active');
};

const subscribePopupFormSubmitHandler = (e) => {
  e.preventDefault();

  if (!formValidator.validate()) {
    return;
  }

  fetch('/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${encodeURIComponent(email)}`,
  })
    .then((res) => {
      clearInputFieldValues();
      closeSubscribePopup();
    })
    .catch((err) => {
      console.error(err);
    })
}

const registerEventListeners = () => {
  document.querySelectorAll('.subscribe-popup__link').forEach((link) => {
    console.log('link')
    link.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSubscribePopup();
    })
  });

  document.querySelector('.subscribe-popup__btn--submit').addEventListener('click', subscribePopupFormSubmitHandler);

  document.querySelector('.subscribe-popup__btn--cancel').addEventListener('click', (e) => {
    e.preventDefault();
    clearInputFieldValues();
    closeSubscribePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearInputFieldValues();
      closeSubscribePopup();
    }
  });

  document.querySelector('#email').addEventListener('blur', formValidator.validateEmailField);
  document.querySelector('#email-confirm').addEventListener('blur', formValidator.validateEmailConfirmField);
};

(function () {
  registerEventListeners();
})();