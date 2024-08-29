/**
 * @typedef {import('./types').InputData} InputData
 * @typedef {import('./types').SelectData} SelectData
 */

/**
 * @function Form
 * @param {InputData} input
 * @param {SelectData} select
 * @param {string} selectText
 * @returns {string}
 */

export const Form = (input, select, selectText) => `
  ${input.map((inputItem) => `
    <label class="form__field">
      <input type="${inputItem.type}"
        id="${inputItem.placeholder}"
        placeholder="${inputItem.placeholder}"
      />
    </label>
  `).join('')}
  <label class="form__field">
    <span>${selectText}</span>
    <select id="connection">
      ${select.map((selectItem) => `
        <option value="${selectItem.value}">
          ${selectItem.optionText}
        </option>
      `).join('')}
    </select>
    <img src="/assets/icons/arrow.svg" alt="arrow select" />
  </label>
`;
