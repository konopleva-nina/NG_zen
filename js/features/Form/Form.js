import { Select } from '../Select/index.js';
import { Input } from '../Input/index.js';
import { Checkbox } from '../../ui/index.js';
import { Button } from '../../ui/index.js';
/**
 * @typedef {import('../../widgets/Modal/types').ModalData} ModalData
 */

/**
 * @function Form
 * @param {ModalData} data
 * @returns {string}
 */

export const Form = (data) => {
  const { inputs, connections, selectText, checkbox, buttonText } = data;
  return `
    <form class="form" id="order">
      ${inputs.map((inputItem) => Input(inputItem)).join('')}
      ${Select(connections, selectText)}
      ${Checkbox(checkbox)}
      ${Button(buttonText, 'form__submit', 'submit', 'submit-form')}
    </form>
  `;
};
