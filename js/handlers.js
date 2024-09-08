import { IconMoon } from './ui/Icons/IconMoon/IconMoon.js';
import { IconSun } from './ui/Icons/IconSun/IconSun.js';

/**
 * @typedef {import('./widgets/Clients/types').Client} BrandFromAPI
 */

/**
 * @function onThemeBtnClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 */

export const onThemeBtnClick = (event, brandsFromAPI) => {
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
 * @function handleMenuBurgerBtnClick
 * @description opening/closing burger menu
 */

export const handleMenuBurgerBtnClick = () => {
  const $nav = document.querySelector('#nav');
  const $burgerBtn = document.querySelector('#burger');
  $nav?.classList.toggle('active');
  $burgerBtn?.classList.toggle('active');
};

/**
 * @function handleLogoBtnClick
 * @description clicking on the logo button will scroll the page up
 */

export const handleLogoBtnClick = () => {
  window.scroll(0, 0);
};

/**
 * @function handleOrderOpenBtnClick
 */

export const handleOrderOpenBtnClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.add('active');
};

/**
 * @function handleCloseModalBtnClick
 */

export const handleCloseModalBtnClick = () => {
  const $modal = document.querySelector('#modal');
  $modal?.classList.remove('active');
};
