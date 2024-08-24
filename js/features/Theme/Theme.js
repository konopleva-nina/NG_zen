import { IconMoon } from '../../ui/Icons/IconMoon/IconMoon.js';

/**
 * @function Theme
 * @returns {string}
 */

export const Theme = () => `
  <button class="header__theme"
    id="theme"
    data-theme="light"
  >
    ${IconMoon()}
  </button>
`;
