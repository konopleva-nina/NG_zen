import { handleLogoClick } from './handlers.js';
import { handletLangChange } from './handlers.js';
import { onThemeClick } from './handlers.js';
import { handleNavLinkClick } from './handlers.js';
import { handleOrderOpenClick } from './handlers.js';
import { handleOrderCloseClick } from './handlers.js';
import { toggleNavigation } from './utils/index.js';
import { handleConnectionNodeChange } from './handlers.js';

/**
 * @typedef {import('./types').AppData} AppData
 */

/**
 * @function addHandlers
 * @param {AppData} dataFromAPI
 * @returns {void}
 */

export const addHandlers = (dataFromAPI) => {
  const $logoBtn = document.querySelector('#logo');
  const $themeBtn = document.querySelector('#theme');
  const $burgerBtn = document.querySelector('#burger');
  const $navLink = document.querySelectorAll('[data-id="nav-link"]');
  const $orderOpenBtn = document.querySelector('#order-open');
  const $closeModalBtn = document.querySelector('#close');
  const $lang = document.querySelector('#lang');
  const $connectionNode = document.querySelector('#connection');


  $logoBtn?.addEventListener('click', handleLogoClick);
  $themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
  $burgerBtn?.addEventListener('click', toggleNavigation);
  $navLink?.forEach(($navLink) => $navLink.addEventListener('click', handleNavLinkClick));
  $orderOpenBtn?.addEventListener('click', handleOrderOpenClick);
  $closeModalBtn?.addEventListener('click', handleOrderCloseClick);
  $lang?.addEventListener('change', handletLangChange);
  $connectionNode?.addEventListener('change', handleConnectionNodeChange);
};
