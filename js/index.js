import { data as dataFromAPI } from './data.js';
import { Header } from './widgets/Header/Header.js';
import { Download } from './widgets/Download/Download.js';
import { Warranty } from './widgets/Warranty/Warranty.js';
import { Care } from './widgets/Care/Care.js';
import { handleLogoBtnClick } from './handlers.js';
import { onThemeBtnClick } from './handlers.js';
import { handleMenuBurgerBtnClick } from './handlers.js';
import { handleOrderOpenBtnClick } from './handlers.js';
import { handleCloseModalBtnClick } from './handlers.js';
import { Cashback } from './widgets/Cashback/Cashback.js';
import { Clients } from './widgets/Clients/Clients.js';
import { Footer } from './widgets/Footer/Footer.js';
import { Modal } from './widgets/Modal/Modal.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));
$root?.insertAdjacentHTML('beforeend', Modal(dataFromAPI.modal));


const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');
const $orderOpenBtn = document.querySelector('#order-open');
const $closeModalBtn = document.querySelector('#close');

$logoBtn?.addEventListener('click', handleLogoBtnClick);
$themeBtn?.addEventListener('click', (event) => onThemeBtnClick(event, dataFromAPI.clients.brands));
$burgerBtn?.addEventListener('click', handleMenuBurgerBtnClick);
$orderOpenBtn?.addEventListener('click', handleOrderOpenBtnClick);
$closeModalBtn?.addEventListener('click', handleCloseModalBtnClick);
