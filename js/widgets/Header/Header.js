import { Burger } from '../../features/Burger/Burger.js';
import { Lang } from '../../features/Lang/Lang.js';
import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';
import { Theme } from '../../features/Theme/Theme.js';

/**
 * @typedef {import('./types').HeaderData} HeaderData
 */

/**
 * @function Header
 * @param {HeaderData} data
 * @returns {string} HTML
 */

export const Header = (data) => {
  const { langs, navigation } = data;
  return `
    <header class="header">
      <div class="header__wrapper">
        ${Logo('header__logo')}
        <nav class="header__nav">
          ${Navigation(navigation)}
        </nav>
        <div class="header__actions">
          ${Lang(langs)}
          ${Theme()}
          ${Burger()}
        </div>
      </div>
    </header>
  `;
};
