import { Form } from '../../features/Form/Form.js';
import { Button } from '../../ui/Button/Button.js';
import { Checkbox } from '../../ui/Checkbox/CheckBox.js';
import { IconClose } from '../../ui/Icons/IconClose/IconClose.js';
import { Title } from '../../ui/Title/Title.js';

/**
 * @typedef {import('./types').ModalData} ModalData
 */

/**
 * @function Modal
 * @param {ModalData} data
 * @returns {string}
 */

export const Modal = (data) => {
  const { title, input, select, selectText, checkbox, buttonText } = data;
  return `
    <div class="modal active" id="modal">
      <div class="modal__body">
        <button class="modal__close" id="close">
          ${IconClose()}
        </button>
        ${Title(title, 'modal__title')}
        <form class="form" id="order">
          ${Form(input, select, selectText)}
          ${Checkbox(checkbox)}
          ${Button(buttonText, 'form__submit', 'submit', 'submit-form')}
        </form>
      </div>
    </div>
  `;
};
