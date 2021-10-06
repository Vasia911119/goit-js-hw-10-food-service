import './sass/main.scss';
import card from './templates/card.hbs';
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector('.js-menu'),
    themeSwitchToggle: document.querySelector('#theme-switch-toggle')
};

refs.menu.insertAdjacentHTML('beforeend', card(menu));
refs.themeSwitchToggle.addEventListener('change', swichTheme)

document.body.classList.add('light-theme');
function swichTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.className);
};

if (localStorage.getItem('theme'))
    document.body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === Theme.DARK)
    refs.themeSwitchToggle.setAttribute('checked', true);