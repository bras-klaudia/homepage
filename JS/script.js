console.log("Cześć wszystkim! ")

let changeColorButton = document.querySelector(".section__button")
let body = document.querySelector(".body")
let nextColorName = document.querySelector(".section__button--change")

changeColorButton.addEventListener("click", () => {
    body.classList.toggle("body__whiteBackground");
    nextColorName.innerText = body.classList.contains("body__whiteBackground") ? "szare" : "białe";
});
