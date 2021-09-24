import { showModal } from "./showModal";
import { fetchByIngredient } from "./fetchCocktails";
import { cleanModal } from "./cleanModal";
import { submitByClickListener, submitByEnterListener } from "./submit";
import { displayCocktailsList } from "./displayCocktailsList";

export const btnByIngredients = document.querySelector(".wrap__one");
const closeBtn = document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const inputIngredient = document.querySelector(".modal-ingredients__input")
const cocktailsElList = document.querySelector(".modal-ingredients__list");
const submitBtn = document.querySelector(".modal-ingredients__submit");
const warning = document.createElement("div");


const onSubmit = async () => {
    cleanModal(cocktailsElList, warning);
    const cocktailsName = await fetchByIngredient(inputIngredient.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName, cocktailsElList);
    } else {
        warning.className = "modal-ingredients__list-warning";
        modal.appendChild(warning);
        warning.textContent = "There is no such ingredient!";
    }
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    cleanModal(cocktailsElList, warning);
    inputIngredient.value = "";
})

showModal(btnByIngredients, modal);
submitByClickListener(submitBtn, onSubmit);
submitByEnterListener(modal, onSubmit);
