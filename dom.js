/**
 * DOM API
 * Kuidas kasutada Javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seatud see js fail.
 */

const h1element = document.querySelector('h1');
h1element .innerText = "Head Teed!"


const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];

const fruitListCointainer = document.querySelector('#fruit-list');
const orderedListElement = document.createElement('ol');

for(let i = 0; i < fruits.length; i++) {
    const listElement = document.createElement('li');
    listElement.innerText = fruits[i];
    orderedListElement.appendChild(listElement);

}

fruitListCointainer.appendChild(orderedListElement);


const dontTouchMeButton = document.querySelector('#dont-touch-me-button');

dontTouchMeButton.addEventListener('click', (event) => {
    console.log(event);
    alert("Ei tohtinud ju");
});