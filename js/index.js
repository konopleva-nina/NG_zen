import { data as dataFromAPI } from './data.js';
import { dataRus } from './dataRus.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { handleLogoBtnClick } from './handlers.js';
import { onThemeBtnClick } from './handlers.js';
import { handleMenuBurgerBtnClick } from './handlers.js';
import { handleOrderOpenBtnClick } from './handlers.js';
import { handleCloseModalBtnClick } from './handlers.js';
import { onLangSelectChange } from './handlers.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Clients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { Modal } from './widgets/Modal/index.js';

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
const $langSelect = document.querySelector('#lang');
$langSelect?.addEventListener('change', (event) => onLangSelectChange(event, dataRus, dataFromAPI));
