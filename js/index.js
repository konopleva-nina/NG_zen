import { App } from './app/App.js';
import { addHandlers } from './addHandlers.js';
import { API_URL } from './config.js';

const $root = document.querySelector('#root');

fetch(API_URL)
  .then((response) => response.json())
  .then((responseData) => {
    if ($root) $root.innerHTML = App(responseData.en);
    addHandlers(responseData.en);
  })
  .catch((error) => console.error(error));
