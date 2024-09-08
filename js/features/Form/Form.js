import { Select } from '../Select/Select.js';
import { Input } from '../Input/Input.js';
import { Checkbox } from '../../ui/Checkbox/CheckBox.js';
import { Button } from '../../ui/Button/Button.js';
/**
 * @typedef {import('../../widgets/Modal/types').ModalData} ModalData
 */

/**
 * @function Form
 * @param {ModalData} data
 * @returns {string}
 */

export const Form = (data) => {
  const { input, select, selectText, checkbox, buttonText } = data;
  return `
    <form class="form" id="order">
      ${input.map((inputItem) => Input(inputItem)).join('')}
      ${Select(select, selectText)}
      ${Checkbox(checkbox)}
      ${Button(buttonText, 'form__submit', 'submit', 'submit-form')}
    </form>
  `;
};
