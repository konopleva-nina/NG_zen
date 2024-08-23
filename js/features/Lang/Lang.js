import { IconSelectArrow } from '../../ui/Icons/IconSelectArrow/IconSelectArrow.js';

/**
 * @typedef {import('./types').LangData} LangData
 */

/**
 * @function Lang
 * @param {LangData[]} langList
 * @returns {string} HTML
 */

export const Lang = (langList) => `
  ${IconSelectArrow()}
  <select id="lang">
    ${langList.map((langItem) => `
      <option value="${langItem.key}">
        ${langItem.name}
      </option>
    `).join('')}
  </select>
`;
