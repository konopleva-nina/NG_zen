/**
 * @typedef {import('./types').ButtonData} ButtonData
 */

/**
 * @function Button
 * @param {ButtonData} data
 * @param {string} className
 * @return {string}
 */

export const Button = (data, className) => `
  <button class="${className}"
    type="button"
    id="order-open"
  >
    ${data}
  </button>
`;
