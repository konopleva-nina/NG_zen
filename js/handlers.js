import { App } from './app/App.js';
import { IconMoon } from './ui/icons/index.js';
import { IconSun } from './ui/icons/index.js';
import { toggleNavigation } from './utils/index.js';
import { addHandlers } from './addHandlers.js';
import { DATA_URL } from './index.js';

/**
 * @typedef {import('./types').Client} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeBtn = /** @type {HTMLElement | null} */ (event.currentTarget);
  const $root = document.querySelector('#root');
  if (!$brandNodes || !$themeBtn || !$root) return;

  const currentTheme = $themeBtn.dataset.theme;

  if (currentTheme === 'light') {
    $themeBtn.dataset.theme = 'dark';
    $themeBtn.innerHTML = IconSun();
    $root.classList.add('dark');
    $root.classList.remove('light');
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  };
  if (currentTheme === 'dark') {
    $themeBtn.dataset.theme = 'light';
    $themeBtn.innerHTML = IconMoon();
    $root.classList.add('light');
    $root.classList.remove('dark');
    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    });
  };
};

/**
 * @function handleNavLinkClick
 * @description opening/closing burger menu
 * @param {Event} event
 * @returns {void}
 */

export const handleNavLinkClick = (event) => {
  event.preventDefault();
  const targetId = /** @type {HTMLAnchorElement} */ (event.target).hash;
  if (!targetId) return;
  /** @type {HTMLElement | null} */
  const $targetElement = document.querySelector(targetId);
  /** @type {HTMLElement | null} */
  const $header = document.querySelector('header');
  const headerHeight = $header?.offsetHeight || 0;

  if (!$targetElement) return;

  const targetPosition =
    $targetElement.getBoundingClientRect().top -
    headerHeight;

  window.scrollBy({
    top: targetPosition,
    behavior: 'smooth',
  });

  toggleNavigation();
};

/**
 * @function handleLogoClick
 * @description clicking on the logo button will scroll the page up
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * @function handleOrderOpenClick
 * @returns {void}
 */

export const handleOrderOpenClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.add('active');
};

/**
 * @function handleOrderCloseClick
 * @returns {void}
 */

export const handleOrderCloseClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.remove('active');
};

/**
 * @function handletLangChange
 * @param { Event } event
 */

export const handletLangChange = (event) => {
  const selectedLang =  /** @type {HTMLSelectElement} */ (event?.target).value;
  /** @type { HTMLElement | null } */
  const $root = document.querySelector('#root');

  if (!$root) return;

  fetch(DATA_URL)
    .then((responce) => responce.json())
    .then((responceData) => {
      $root.innerHTML = App(responceData[selectedLang]);
      addHandlers(responceData[selectedLang]);
    })
    .catch((error) => console.error('Не удалось поменять язык', error));
};

/**
 * @function handleConnectionNodeChange
 * @param {Event} event
 */

export const handleConnectionNodeChange = (event) => {
  const parentNode = /** @type {HTMLElement} */ (event?.target).parentElement;
  const spanNode = parentNode?.querySelector('span');
  const selectItem = /** @type {HTMLSelectElement} */ (event?.target).value;

  if (!spanNode) return;

  if (selectItem) spanNode.style.display = 'none';
  else spanNode.style.display = 'block';
};
