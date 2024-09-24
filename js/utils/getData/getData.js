import { API_BASE_URL } from '../../config.js';

/**
 * @typedef {import('./types').AppDataFromAPI} AppDataFromAPI
 */

/**
 * @function getData
 * @param {string} currentLang
 * @returns {Promise<AppDataFromAPI | null>}
 */

export const getData = async (currentLang) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${currentLang}/.json`);
    if (!response.ok) throw new Error('No data');
    return response.json();
  } catch (/** @type {*} */ error) {
    if (error.message.includes('Failed')) {
      console.log('Случлась не наша логическая ошибка');
    }
    if (error.message.includes('No data')) {
      console.log('Случлась наша логическая ошибка');
    }
    return null;
  };
};
