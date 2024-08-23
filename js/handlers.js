import { IconMoon } from './ui/Icons/IconMoon/IconMoon.js';
import { IconSun } from './ui/Icons/IconSun/IconSun.js';

/**
 * @function handleThemeBtnClick
 * @description смена темы по кнопке луна/солнце
 * @param {object} event
 */

export const handleThemeBtnClick = (event) => {
  const $themeBtn = event.currentTarget;
  const theme = $themeBtn.dataset.theme;
  const $root = document.querySelector('#root');
  if (theme === 'light') {
    $themeBtn.dataset.theme = 'dark';
    $themeBtn.innerHTML = IconSun();
    $root.classList.add('dark');
    $root.classList.remove('light');
  };
  if (theme === 'dark') {
    $themeBtn.dataset.theme = 'light';
    $themeBtn.innerHTML = IconMoon();
    $root.classList.add('light');
    $root.classList.remove('dark');
  };
};

/**
 * @function handleMenuBurgerBtnClick
 * @description открытие/закрытие меню бургер
 */

export const handleMenuBurgerBtnClick = () => {
  const $nav = document.querySelector('#nav');
  const $burgerBtn = document.querySelector('#burger');
  $nav.classList.toggle('active');
  $burgerBtn.classList.toggle('active');
};

/**
 * @function handleLogoBtnClick
 * @description скролл наверх страницы при нажатии на кнопку Лого
 */

export const handleLogoBtnClick = () => {
  window.scroll(0, 0);
};
