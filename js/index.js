import { dataEn as dataFromAPI } from './api/index.js';
import { App } from './app/App.js';
import { addHandlers } from './addHandlers.js';

const $root = document.querySelector('#root');

if ($root) $root.innerHTML = App(dataFromAPI);

addHandlers(dataFromAPI);
