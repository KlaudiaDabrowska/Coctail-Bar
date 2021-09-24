import { showModal } from "./showModal";
import { fetchCocktailsByName as fetchByName } from "./fetchCocktails";
import { cleanModal } from "./cleanModal";
import { submitByClickListener, submitByEnterListener } from "./submit";
import { displayCocktailsList } from "./displayCocktailsList";

export const btnByName=document.querySelector(".wrap__cocktail");
const closeBtn= document.querySelector(".modal-cocktail__close");
const modal = document.querySelector(".modal-cocktail");
const inputNameCocktail= document.querySelector(".modal-cocktail__input");
const submitBtn= document.querySelector(".modal-cocktail__submit");
const cocktailsElList = document.querySelector(".modal-cocktail__list");
const warning = document.createElement("div");


const onSubmit = async () => {
    cleanModal(cocktailsElList, warning);
    const cocktailsName = await fetchByName(inputNameCocktail.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName, cocktailsElList);
    } else {
        warning.className = "modal-ingredients__list-warning";
        modal.appendChild(warning);
        warning.textContent = "There is no such cocktail!";
    }
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    cleanModal(cocktailsElList, warning);
    inputNameCocktail.value = "";
})

showModal(btnByName, modal);
submitByClickListener(submitBtn,onSubmit);
submitByEnterListener(modal, onSubmit);
