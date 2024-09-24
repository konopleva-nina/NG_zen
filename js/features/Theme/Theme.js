import { IconMoon } from '../../ui/icons/index.js';
import { IconSun } from '../../ui/icons/index.js';

/**
 * @function Theme
 * @returns {string}
 */

export const Theme = () => {
  const currentTheme = localStorage.getItem('currentTheme');
  return `
    <button class="header__theme"
      id="theme"
    >
      ${currentTheme === 'light' ? IconMoon() : IconSun()}
    </button>
  `;
};
