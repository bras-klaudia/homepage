function welcome() {
    console.log("Cześć wszystkim! ")
}

let onChangeBackgroundClick = () => {
        body.classList.toggle("body__whiteBackground");
        nextColorName.innerText = body.classList.contains("body__whiteBackground") ? "szare" : "białe";
    };

    welcome();

let changeColorButton = document.querySelector(".section__button")
let body = document.querySelector(".body")
let nextColorName = document.querySelector(".section__button--change")

changeColorButton.addEventListener("click", onChangeBackgroundClick);
