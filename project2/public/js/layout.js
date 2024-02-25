"use strict";

(function () {
  document.querySelector('.primary-nav__btn').addEventListener('click', () => {
    document.querySelector('.primary-nav__list').classList.toggle('primary-nav__list--active');
  });
})();