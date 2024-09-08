import { Form } from '../../features/Form/Form.js';
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
      ${Form(data)}
    </div>
  </div>
`;
