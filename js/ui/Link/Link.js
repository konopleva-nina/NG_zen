import { IconApple } from '../Icons/IconApple/IconApple.js';
import { IconGoogle } from '../Icons/IconGoogle/IconGoogle.js';
import { IconLinkedin } from '../Icons/IconLinkedin/IconLinkedin.js';

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
  const { url, type, content } = dataLink;
  const iconMap = {
    apple: IconApple(),
    google: IconGoogle(),
    ln: IconLinkedin(),
  };
  return `
    <a class="${className}" href="${url}">
      ${type === 'image' ? iconMap[content] : ''}
      ${type === 'text' ? content : ''}
    </a>
  `;
};
