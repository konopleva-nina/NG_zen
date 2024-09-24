import { App } from '../../app/App.js';
import { addHandlers } from '../../addHandlers.js';
import { getData } from '../index.js';
import { Preloader } from '../../ui/index.js';

/**
 * @function renderApp
 * @param {string} currentLang
 */

export const renderApp = async (currentLang) => {
  const $root = document.querySelector('#root');
  if (!$root) return;

  $root.innerHTML = Preloader();

  const responseData = await getData(currentLang);
  if (!responseData) {
    $root.innerHTML = '<p>Что-то пошло не так. Повторите попытку позже.</p>';
    return;
  }

  $root.innerHTML = App(responseData);
  addHandlers(responseData);
};

// fetch(`${API_BASE_URL}/${currentLang}/.json`)
//   .then((response) => response.json())
//   .then((responseData) => {
//     if ($root) $root.innerHTML = App(responseData);
//     addHandlers(responseData);
//   })
//   .catch((error) => console.error(error));
