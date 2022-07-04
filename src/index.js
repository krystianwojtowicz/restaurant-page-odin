import {initial} from './initial2.js';
import {contact} from './contact2.js';
import {menu} from './menu2.js';
// import './style.css';

initial();

let tabModule = (function() {
    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', initial);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);
})();