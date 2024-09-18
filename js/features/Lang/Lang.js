import { IconArrowDown } from '../../ui/icons/index.js';

/**
 * @typedef {import('./types').LangData} LangData
 */

/**
 * @function Lang
 * @param {LangData[]} langList
 * @returns {string} HTML
 */

export const Lang = (langList) => `
  <label class="header__lang">
    ${IconArrowDown()}
    <select id="lang">
      ${langList.map((langItem) => `
        <option value="${langItem.key}">
          ${langItem.name}
        </option>
      `).join('')}
    </select>
  </label>
`;
