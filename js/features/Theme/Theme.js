import { IconMoon } from '../../ui/icons/index.js';

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
