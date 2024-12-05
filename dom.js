/**
 * DOM API
 * Kuidas kasutada Javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seatud see js fail.
 */

import { Fruit } from "./Fruit.js";
import { BaseError } from "./Error.js"

const FruitManager = new Fruit();
FruitManager.renderFruitList();

const formForAddingNewFruits = document.querySelector("#add-new-fruit-form");
const fruitListContainer = document.querySelector("#fruit-list")

formForAddingNewFruits.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let fruitInputValue = formData.get("fruit");

    try {
        FruitManager.addFruit(fruitInputValue);    
    } catch (error) {
        new BaseError(error.message);
    }
    
    FruitManager.renderFruitList()

    event.target.reset();
})

fruitListContainer.addEventListener("click", (event) => {
    const deleteButton = event.target.closest('.delete-btn');

    if (!deleteButton) return;

    const index = parseInt(deleteButton.dataset.index);
    FruitManager.removeFruit(index);
    FruitManager.renderFruitList();
})

