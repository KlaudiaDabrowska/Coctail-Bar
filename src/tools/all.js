import { showCloseModal } from "./showCloseModal";

export const btnThree=document.querySelector(".wrap__three");
const closeBtn= document.querySelector(".modal-all-cocktails__close");
const modal = document.querySelector(".modal-all-cocktails");
const cocktailsElList = document.querySelector(".modal-all-cocktails__list");

showCloseModal(btnThree, closeBtn, modal);

const fetchCocktails = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => data.drinks)
}

const displayCocktails = (cocktails) => {
    cocktails.forEach((cocktail) => {
        const liElement = document.createElement("li");
        liElement.className = "modal-ingredients__list-element";
        cocktailsElList.appendChild(liElement);
        const cocktailBtn = document.createElement("button")
        cocktailBtn.className = "modal-ingredients__list-element-button";
        liElement.appendChild(cocktailBtn);
        cocktailBtn.innerHTML = cocktail.strDrink;
    })
}

btnThree.addEventListener("click", async () => {
    const cocktails = await fetchCocktails();
    displayCocktails(cocktails);
})

