import { data } from './data.js';
import { Header } from './widgets/Header/Header.js';
import { Download } from './widgets/Download/Download.js';
import { Warranty } from './widgets/Warranty/Warranty.js';
import { Care } from './widgets/Care/Care.js';
import { handleLogoBtnClick } from './handlers.js';
import { handleThemeBtnClick } from './handlers.js';
import { handleMenuBurgerBtnClick } from './handlers.js';
import { Cashback } from './widgets/Cashback/Cashback.js';
import { Clients } from './widgets/Clients/Clients.js';
import { Modal } from './widgets/Modal/Modal.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Modal(data.modal));


const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');

$logoBtn.addEventListener('click', handleLogoBtnClick);
$themeBtn.addEventListener('click', handleThemeBtnClick);
$burgerBtn.addEventListener('click', handleMenuBurgerBtnClick);
