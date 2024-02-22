"use strict";

(function () {
  // event listeners for button
  document.querySelector("#primary-nav__btn").addEventListener("click", () => {
    document.querySelector("#primary-nav__dropdown").classList.toggle("show");
  });

  document.querySelector("#header-country__btn").addEventListener("click", () => {
    document.querySelector("#header-country-dropdown").classList.toggle("show");
  });

  document.querySelector("#header-country__btn").addEventListener("blur", () => {
    document.querySelector("#header-country-dropdown").classList.remove("show");
  });
})();
