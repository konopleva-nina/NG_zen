import { IconLinkedin } from '../Icons/IconLinkedin/IconLinkedin.js';

/**
 * @typedef {import('./types').LinksFooterData} LinksFooterData
 */

/**
 * @function LinksFooter
 * @param {LinksFooterData[]} links
 * @returns {string}
 */

export const LinksFooter = (links) => `
  <ul class="column__list">
    ${links.map((link) => `
      <li class="column__item">
        ${link.content.type === 'text' ? `<a href="${link.url}">${link.content.data}</a>` : ''}
        ${link.content.type === 'image' ? `<a href="${link.url}">${IconLinkedin()}</a>` : ''}
      </li>
    `).join('')}
  </ul>
`;
