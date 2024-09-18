import { Form } from '../../features/index.js';
import { IconClose } from '../../ui/icons/index.js';
import { Title } from '../../ui/index.js';

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
