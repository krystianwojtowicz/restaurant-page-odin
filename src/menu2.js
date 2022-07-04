import pizza from './assets/pizza.jpg';
import pasta from './assets/pasta.jpg';
export function menu() {
const contentDiv = document.querySelector('#content');
    
contentDiv.replaceChildren();
const h1Menu = document.createElement('h1');
h1Menu.textContent = "Welcome to 'There and back'";
const imgDish1 = document.createElement('img');
imgDish1.src = pasta;
imgDish1.classList.add('menu-img');
const pDish1 = document.createElement('p');
pDish1.textContent = 'pasta';
const imgDish2 = document.createElement('img');
imgDish2.src = pizza;
imgDish2.classList.add('menu-img');
const pDish2 = document.createElement('p');
pDish2.textContent = 'pizza';
contentDiv.appendChild(h1Menu);
contentDiv.appendChild(imgDish1);
contentDiv.appendChild(pDish1);
contentDiv.appendChild(imgDish2);
contentDiv.appendChild(pDish2);
}