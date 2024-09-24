import { renderApp } from './utils/index.js';

const $root = document.querySelector('#root');

const currentLang = localStorage.getItem('currentLang') ?? 'en';
const currentTheme = localStorage.getItem('currentTheme') ?? 'light';
localStorage.setItem('currentLang', currentLang);
localStorage.setItem('currentTheme', currentTheme);

$root?.classList.add(currentTheme);

renderApp(currentLang);
