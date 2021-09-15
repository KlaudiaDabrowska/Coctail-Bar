export const btnFour = document.querySelector(".wrap__four");
const closeBtn = document.querySelector(".modal-random__close");
const modal = document.querySelector(".modal-random");
const input = document.querySelector(".modal-random__input");
const image = document.querySelector(".wrap-images__drink");

const shakeDrinkShowModal = () =>{
    image.classList.add("wrap-images__drink--shake");
    setTimeout(() => {
        image.classList.remove("wrap-images__drink--shake")
    }, 1000);

    setTimeout(() => {
        modal.style.display = "flex";
    }, 1100);
}

btnFour.addEventListener("click", shakeDrinkShowModal)

image.addEventListener("click", shakeDrinkShowModal)

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})