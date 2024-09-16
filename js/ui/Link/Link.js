import { IconApple } from '../icons/index.js';
import { IconGoogle } from '../icons/index.js';
import { IconLinkedin } from '../icons/index.js';
import { IconDeveloper } from '../icons/index.js';

/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} dataLink
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (dataLink, className = '') => {
  const { url, type, name } = dataLink;
  const iconMap = {
    apple: IconApple(),
    google: IconGoogle(),
    ln: IconLinkedin(),
    developer: IconDeveloper(),
  };
  return `
    <a class="${className}" href="${url}">
      ${type === 'image' ? iconMap[name] : ''}
      ${type === 'text' ? name : ''}
    </a>
  `;
};
