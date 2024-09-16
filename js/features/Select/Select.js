/**
 * @typedef {import('./types').SelectData} SelectData
 */

/**
 * @function Select
 * @param {SelectData[]} select
 * @param {string} selectText
 * @returns {string}
 */

export const Select = (select, selectText) => {
  return `
    <label class="form__field">
      <span>${selectText}</span>
      <select id="connection">
        ${select.map((selectItem) => `
          <option value="${selectItem.value}">
            ${selectItem.label}
          </option>
        `).join('')}
      </select>
      <img src="/assets/icons/arrow.svg" alt="arrow select" />
    </label>
  `;
};
