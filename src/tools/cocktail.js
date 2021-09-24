import { fetchOneCocktail as fetchByName } from "./fetchCocktails";
import { displayCocktail } from "./displayCocktail";

export const closeBtn = document.querySelector(".modal-recipe__close");
const modal = document.querySelector(".modal-recipe");
const heading = document.querySelector(".modal-recipe__heading");
const description = document.querySelector(".modal-recipe__description");
const ingredientsList = document.querySelector(".modal-recipe__list");
const cocktailModalElements = [];


document.addEventListener("click", async (e) => {
    if (e.target.className === "modal-ingredients__list-element-button") {
        modal.style.display = "flex";
        const name = e.target.innerHTML;
        heading.textContent = name;
        const cocktail = await fetchByName(name);
        displayCocktail(cocktail, ingredientsList, description, cocktailModalElements);
    }
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    cocktailModalElements.forEach((item) => item.remove());
})