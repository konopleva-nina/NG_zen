import { App } from './app/App.js';
import { addHandlers } from './addHandlers.js';

export const DATA_URL = 'https://ng-free-zen-knop-default-rtdb.firebaseio.com/.json';
const $root = document.querySelector('#root');

fetch(DATA_URL)
  .then((responce) => responce.json())
  .then((responceData) => {
    if ($root) $root.innerHTML = App(responceData.en);
    addHandlers(responceData.en);
  })
  .catch((error) => console.error('Не удалось получить данные:', error));
