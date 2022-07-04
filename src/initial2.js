import image from './assets/wall.jpg';
export function initial() {
const contentDiv = document.querySelector('#content');
    
contentDiv.replaceChildren();
const img = document.createElement('img');
const pInitial = document.createElement('p');
const h1Initial = document.createElement('h1');
pInitial.textContent = 'this is the best restaurant in the world';
h1Initial.textContent = 'welcome to our restaurant "There and back"';
img.src = image;
contentDiv.appendChild(h1Initial);
contentDiv.appendChild(pInitial);
contentDiv.appendChild(img);
}