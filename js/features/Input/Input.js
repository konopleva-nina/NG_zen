/**
 * @typedef {import('./types').InputData} InputData
 */

/**
 * @function Input
 * @param {InputData} input
 * @return {string}
 */

export const Input = (input) => {
  const { id, type, placeholder } = input;
  return `
    <label class="form__field">
      <input type="${type}"
        id="${id}"
        placeholder="${placeholder}"
      />
    </label>
  `;
};
