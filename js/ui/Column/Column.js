import { Link } from '../Link/Link.js';
import { Title } from '../Title/Title.js';

/**
 * @typedef {import('./types').ColumnData} ColumnData
 */

/**
 * @function Column
 * @param {ColumnData} data
 * @return {string}
 */

export const Column = (data) => `
  <div class="column">
    ${Title(data.title, 'column__title')}
    <ul class="column__list">
      ${data.links.map((link) => `
        <li class="column__item">
          ${Link(link)}
        </li>
      `).join('')}
    </ul>
  </div>
`;
