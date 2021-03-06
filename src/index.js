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
refs.themeSwitchToggle.addEventListener('change', switchTheme);

document.body.classList.add(Theme.LIGHT);
function switchTheme() {
    if (document.body.className.includes(Theme.DARK)) {
        document.body.classList.remove(Theme.DARK);
        document.body.classList.add(Theme.LIGHT);
    } else {
        document.body.classList.remove(Theme.LIGHT);
        document.body.classList.add(Theme.DARK);
    };
    localStorage.setItem('theme', document.body.className);
};

if (localStorage.getItem('theme')) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(localStorage.getItem('theme'));
};

if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeSwitchToggle.setAttribute('checked', true)
};
