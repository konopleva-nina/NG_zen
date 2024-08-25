import { LinksFooter } from '../LinksFooter/LinksFooter.js';

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
    <h3 class="column__title">${data.name}</h3>
    ${LinksFooter(data.links)}
  </div>
`;
