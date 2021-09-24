import { showModal } from "./showModal";
import { fetchAlcoholicCocktails as fetchCocktails } from "./fetchCocktails";
import { displayCocktailsList } from "./displayCocktailsList";


export const btnAllCocktails=document.querySelector(".wrap__three");
const closeBtn= document.querySelector(".modal-all-cocktails__close");
const modal = document.querySelector(".modal-all-cocktails");
const cocktailsElList = document.querySelector(".modal-all-cocktails__list");


btnAllCocktails.addEventListener("click", async () => {
    const cocktails = await fetchCocktails();
    displayCocktailsList(cocktails, cocktailsElList);
})

showModal(btnAllCocktails, modal);
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})