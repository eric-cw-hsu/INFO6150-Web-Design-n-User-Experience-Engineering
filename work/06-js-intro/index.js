"use strict";

const openPrimaryNavDropdownList = () => {
  document.getElementById('primary-nav__dropdown').style.display = 'block';
}

const closePrimaryNavDropdownList = () => {
  document.getElementById('primary-nav__dropdown').style.display = 'none';
}


const openClosePrimaryNavDropdownList = () => {
  if (document.getElementById('primary-nav__dropdown').style.display === 'block') {
    closePrimaryNavDropdownList()
  } else {
    openPrimaryNavDropdownList()
  }
}

const openCountryDropdownList = () => {
  document.getElementById('header-country-dropdown').style.display = 'block';
}

const closeCountryDropdownList = () => {
  document.getElementById('header-country-dropdown').style.display = 'none';
}

const openCloseCountryDropdownList = () => {
  if (document.getElementById('header-country-dropdown').style.display === 'block') {
    closeCountryDropdownList()
  } else {
    openCountryDropdownList()
  }
}

// event listener for button
document.getElementById("primary-nav__btn").addEventListener("click", openClosePrimaryNavDropdownList);
document.getElementById("header-country__btn").addEventListener("click", openCloseCountryDropdownList);

document.getElementById('header-country__btn').addEventListener("blur", closeCountryDropdownList);
