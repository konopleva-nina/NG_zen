import { Burger } from '../../features/index.js';
import { Lang } from '../../features/index.js';
import { Logo } from '../../features/index.js';
import { Navigation } from '../../features/index.js';
import { Theme } from '../../features/index.js';

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
