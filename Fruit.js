import { BaseError } from "./Error.js";

export class Fruit {

    constructor() {
        this.fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];
        this.errorMessage = document.querySelector("#error-messages");
    };

    addFruit(name) {  
        if(!name.trim()) {
            throw new BaseError("Fruit must have a name.");
        }

        if(this.fruits.includes(name)) {
            throw new BaseError(`${name} nimega puuvili on juba olemas`);
        }

        this.fruits.push(name);
    }

    removeFruit(index) {
        this.fruits.splice(index, 1);
    }

    renderFruitList() {
        const fruitListContainer = document.querySelector("#fruit-list");
        fruitListContainer.innerHTML = "";

        const orderedListElement = document.createElement("ol");

        for(let i = 0; i < this.fruits.length; i++) {
            const listElement = document.createElement("li");
            const spanElement = document.createElement("span");
            const buttonElement = document.createElement("button");

            listElement.setAttribute("draggable", true);
            listElement.setAttribute("data-index", i);

            spanElement.innerText = this.fruits[i];
            
            buttonElement.innerText = "🗑️";
            buttonElement.classList.add("delete-btn");
            buttonElement.setAttribute("data-index", i);

            listElement.appendChild(spanElement);
            listElement.appendChild(buttonElement);

            orderedListElement.appendChild(listElement);
        }

        fruitListContainer.appendChild(orderedListElement);

        fruitListContainer.addEventListener("dragstart", this.handleDragStart.bind(this));
        fruitListContainer.addEventListener("dragover", this.handleDragOver.bind(this));
        fruitListContainer.addEventListener("drop", this.handleDrop.bind(this));
        fruitListContainer.addEventListener("dragend", this.handleDragEnd.bind(this));
    }

    handleDragStart(event) {
        if(event.target.getAttribute("draggable") !== "true") return;

        event.dataTransfer.setData("text/plain", event.target.getAttribute("data-index"));
        event.target.classList.add("draggable");
    };

    handleDragEnd(event) {
        event.target.classList.remove("draggable");
    }

    handleDragOver(event) {};

    handleDrop(event) {};
};