import { Column } from '../../ui/Column/Column.js';
import { Developer } from '../../ui/Developer/Developer.js';
import { IconFooterLogo } from '../../ui/Icons/IconFooterLogo/IconFooterLogo.js';

/**
 * @typedef {import('./types').FooterData} FooterData
 */

/**
 * @function Footer
 * @param {FooterData} data
 * @returns {string}
 */

export const Footer = (data) => {
  const { columns, texts, developer } = data;
  return `
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${columns.map((column) => Column(column)).join('')}
        </div>
        <div class="footer__info">
          <div class="footer__logo">
            <a class="footer__logo" href="https://example.com">
              ${IconFooterLogo()}
            </a>
          </div>
          ${texts.map((text) => `<p class="footer__copy">${text}</p>`).join('')}
          ${Developer(developer)}
        </div>
      </div>
    </footer>
  `;
};
