{
    const welcome = () => {
        console.log("Cześć wszystkim! ")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body")
        const nextColorName = document.querySelector(".section__button--change")


        body.classList.toggle("body__whiteBackground");
        nextColorName.innerText = body.classList.contains("body__whiteBackground") ? "szare" : "białe";
    };

    const init = () => {
        const changeColorButton = document.querySelector(".section__button")

        changeColorButton.addEventListener("click", toggleBackground);

        welcome();

    };

init();

}
