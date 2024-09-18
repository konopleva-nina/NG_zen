import { API_BASE_URL } from '../../config.js';
import { App } from '../../app/App.js';
import { addHandlers } from '../../addHandlers.js';

/**
 * @function updateDataFromLocalStorage
 * @param {string} currentLang
 */

export const updateDataFromLocalStorage = async (currentLang) => {
  const response = await fetch(`${API_BASE_URL}/${currentLang}/.json`);
  const responseData = await response.json();

  const $root = document.querySelector('#root');

  if ($root) $root.innerHTML = App(responseData);
  addHandlers(responseData);
};

// fetch(`${API_BASE_URL}/${currentLang}/.json`)
//   .then((response) => response.json())
//   .then((responseData) => {
//     if ($root) $root.innerHTML = App(responseData);
//     addHandlers(responseData);
//   })
//   .catch((error) => console.error(error));
