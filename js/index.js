import { App } from './app/App.js';
import { addHandlers } from './addHandlers.js';
import { API_BASE_URL } from './config.js';

const $root = document.querySelector('#root');

fetch(`${API_BASE_URL}en/.json`)
  .then((response) => response.json())
  .then((responseData) => {
    if ($root) $root.innerHTML = App(responseData);
    addHandlers(responseData);
  })
  .catch((error) => console.error(error));
