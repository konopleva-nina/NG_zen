import { generateSunIcon } from './ui/generateSunIcon.js'
import { generateMoonIcon } from './ui/generateMoonIcon.js'

export const handleThemeBtnClick = (event) => {
  const $themeBtn = event.currentTarget
  const theme = $themeBtn.dataset.theme
  const $app = document.querySelector('#app')
  if (theme === 'light') {
    $themeBtn.dataset.theme = 'dark'
    $themeBtn.innerHTML = generateSunIcon()
    $app.classList.add('dark')
    $app.classList.remove('light')
  }
  if (theme === 'dark') {
    $themeBtn.dataset.theme = 'light'
    $themeBtn.innerHTML = generateMoonIcon()
    $app.classList.add('light')
    $app.classList.remove('dark')
  }
}

export const handleConnectionNodeChange = (event) => {
  const parentNode = event.target.parentElement
  const spanNode = parentNode.querySelector('span')
  const { value } = event.target
  console.log({ value })

  if (event.target.value) spanNode.style.display = 'none'
  else spanNode.style.display = 'block'
}

export const handleMenuBurgerBtnClick = () => {
  const $menu = document.querySelector('#menu')
  const $burgerBtn = document.querySelector('#burger')
  $menu.classList.toggle('active')
  $burgerBtn.classList.toggle('active')
}
