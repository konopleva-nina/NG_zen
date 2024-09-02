import { FieldsInput } from '../../features/FieldsInput/FieldsInput.js';
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

export const Modal = (data) => `
    <div class="modal" id="modal">
      <div class="modal__body">
        <button class="modal__close" id="close">
          ${IconClose()}
        </button>
        ${Title(data.title, 'modal__title')}
        <form class="form" id="order">
          ${FieldsInput(data.input, data.select, data.selectText)}
          ${Checkbox(data.checkbox)}
          ${Button(data.buttonText, 'form__submit', 'submit', 'submit-form')}
        </form>
      </div>
    </div>
  `;
