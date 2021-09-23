import { showModal } from "./showModal";
import { closeModal } from "./closeModal";
import { fetchAlcoholicCocktails as fetchCocktails } from "./fetchCocktails";
import { displayCocktailsList } from "./displayCocktailsList";


export const btnAllCocktails=document.querySelector(".wrap__three");
const closeBtn= document.querySelector(".modal-all-cocktails__close");
const modal = document.querySelector(".modal-all-cocktails");
const cocktailsElList = document.querySelector(".modal-all-cocktails__list");


// const displayCocktailsList = (cocktails) => {
//     cocktails.forEach((cocktail) => {
//         const liElement = document.createElement("li");
//         liElement.className = "modal-ingredients__list-element";
//         cocktailsElList.appendChild(liElement);
//         const cocktailBtn = document.createElement("button")
//         cocktailBtn.className = "modal-ingredients__list-element-button";
//         liElement.appendChild(cocktailBtn);
//         cocktailBtn.innerHTML = cocktail.strDrink;
//     })
// }

btnAllCocktails.addEventListener("click", async () => {
    const cocktails = await fetchCocktails();
    displayCocktailsList(cocktails, cocktailsElList);
})

showModal(btnAllCocktails, modal);
closeModal(closeBtn, modal);
