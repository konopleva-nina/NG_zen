/**
 * @typedef {import('./types').ImageData} ImageData
 */

/**
 * @function Image
 * @param {ImageData} data
 * @return {string} HTML
 */

export const Image = (data) => `
  <img
    src="${data.source}"
    alt="${data.description}"
  />
`;
