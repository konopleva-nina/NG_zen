import { handleThemeBtnClick } from './handlers.js'
import { handleConnectionNodeChange } from './handlers.js'
import { handleMenuBurgerBtnClick } from './handlers.js'

//смена темы по кнопке луна/солнце
const $app = document.querySelector('#app')
const $themeBtn = document.querySelector('#theme')

$themeBtn.addEventListener('click', handleThemeBtnClick)
//стилизация спан элемента селекта

const $connectionNode = document.querySelector('#connection')

document.addEventListener('change', handleConnectionNodeChange)
//открытие/закрытие меню
const $burgerBtn = document.querySelector('#burger')
const $menu = document.querySelector('#menu')
console.log($burgerBtn)

$burgerBtn.addEventListener('click', handleMenuBurgerBtnClick)
