/**
 * @function toggleNavigation
 * @returns {void}
 */

export const toggleNavigation = () => {
  const $nav = document.querySelector('#nav');
  const $burgerBtn = document.querySelector('#burger');

  if (!$nav || !$burgerBtn) return;

  $nav.classList.toggle('active');
  $burgerBtn.classList.toggle('active');
};
