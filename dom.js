/**
 * DOM API
 * Kuidas kasutada Javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seatud see js fail.
 */

const h1element = document.querySelector('h1');
h1element .innerText = "Head Teed!"

// Näitame dokumendil listi puuviljadest
const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];
const fruitListCointainer = document.querySelector('#fruit-list');

function renderFruitList() {
    fruitListCointainer.innerHTML = "";
    const orderedListElement = document.createElement('ol');

    for(let i = 0; i < fruits.length; i++) {
        const listElement = document.createElement('li');

        const fruitNameSpanElement = document.createElement('span');
        fruitNameSpanElement.textContent = fruits[i];

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.setAttribute("data-index", i);
        deleteButton.classList.add('delete-btn')

        listElement.appendChild(fruitNameSpanElement);
        listElement.appendChild(deleteButton);

        orderedListElement.appendChild(listElement);
    
    }

    fruitListCointainer.appendChild(orderedListElement);
}

renderFruitList()

// Lisame dokumenti nupu, mille üritusi saab kuulata
const dontTouchMeButton = document.querySelector('#dont-touch-me-button');

dontTouchMeButton.addEventListener('click', (event) => {
    console.log(event);
    alert("Ei tohtinud ju");
});

// Kuulame dokumendis olevat vormi ning lisame uue puuvilja
const formForAddingNewFruits = document.querySelector("#add-new-fruit-form");
console.log(formForAddingNewFruits);

formForAddingNewFruits.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const formData = new FormData(event.target);
    console.log(formData)

    let fruitInputValue = formData.get("fruit");
    console.log(fruitInputValue)

    if (!fruitInputValue.trim()) {
        alert("Fruit naming is needed.")
        return;
    };

    fruits.push(fruitInputValue);
    console.log(fruits)

    renderFruitList()

    event.target.reset();
})

fruitListCointainer.addEventListener("click", (event) => {
    console.log(event)
    const deleteButton = event.target.closest('.delete-btn');
    console.log(deleteButton);

    if (!deleteButton) return;

    const index = parseInt(deleteButton.dataset.index);
    fruits.splice(index, 1);
    renderFruitList();
})

