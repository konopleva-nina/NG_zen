/**
 * @typedef {import('./types').ButtonData} ButtonData
 */

/**
 * @function Button
 * @param {ButtonData} data
 * @param {string} className
 * @param {string} type
 * @param {string} id
 * @return {string}
 */

export const Button = (data, className, type, id) => `
  <button class="${className}"
    type="${type}"
    id="${id}"
  >
    ${data}
  </button>
`;
