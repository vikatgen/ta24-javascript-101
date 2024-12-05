export class BaseError extends Error {

    constructor(message) {
        super(message);
        this.errorHTMLElement = document.querySelector("#error-messages");

        this.showError(message);
    }

    showError(message) {
        this.errorHTMLElement.style.display = "block";
        this.errorHTMLElement.style.color = "red";
        this.errorHTMLElement.innerText = message;

        setTimeout(() => {
            this.hideError()
        }, 3000);
    }

    hideError() {
        this.errorHTMLElement.style.display = "none";
        this.errorHTMLElement.innerText = "";
    }
}