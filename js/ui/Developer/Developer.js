/**
 * @typedef {import('./types').DeveloperData} DeveloperData
 */

/**
 * @function Developer
 * @param {DeveloperData} data
 * @returns {string}
 */

export const Developer = (data) => `
  <div class="footer__dev">
    <a class="footer__dev" href="${data.url}">
      <img src="${data.content.data}"
        alt="developer"
      />
    </a>
  </div>
`;
