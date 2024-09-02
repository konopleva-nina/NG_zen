/**
 * @typedef {import('./types').CheckBoxData} CheckBoxData
 */

/**
 * @function Checkbox
 * @param {CheckBoxData} checkbox
 * @returns {string}
 */

export const Checkbox = (checkbox) => `
  <label class="checkbox">
  <input type="checkbox" id="policy" />
    <a href="${checkbox.url}" target="_blank">
      ${checkbox.text}
    </a>
  </label>
`;
