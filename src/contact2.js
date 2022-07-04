import image from './assets/phon.jpg';
export function contact() {
const contentDiv = document.querySelector('#content');
    
contentDiv.replaceChildren();
const imgContact = document.createElement('img');
imgContact.classList.add('contact-img');
const pContact = document.createElement('p');
const h1Contact = document.createElement('h1');
pContact.textContent = 'phone: 123 456 789';
h1Contact.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
imgContact.src = image;
contentDiv.appendChild(h1Contact);
contentDiv.appendChild(pContact);
contentDiv.appendChild(imgContact);
}