import {
    showCloseModal
} from './showCloseModal';

export const closeBtn = document.querySelector(".modal-recipe__close");
const modal = document.querySelector(".modal-recipe");
const heading = document.querySelector(".modal-recipe__heading");
const description = document.querySelector(".modal-recipe__description");
const ingredientsList = document.querySelector(".modal-recipe__list");
const cocktailModalElements = [];


const fetchByName = (name) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
}

const displayCocktail = (cocktail) => {
    for (let i = 1; i < 16; i++) {
        if (cocktail[`strIngredient${i}`] == null) {
            break;
        }
        const ingredient = document.createElement("li");
        ingredient.className = "modal-recipe__list-element";
        ingredientsList.appendChild(ingredient);
        ingredient.innerHTML = cocktail[`strIngredient${i}`];
        cocktailModalElements.push(ingredient);
    }

    const recipeParagraph = document.createElement("p");
    recipeParagraph.className = "modal-recipe__recipe-info";
    description.appendChild(recipeParagraph);
    recipeParagraph.innerHTML = cocktail.strInstructions;
    cocktailModalElements.push(recipeParagraph)

    const image = document.createElement("img");
    description.appendChild(image);
    image.setAttribute("src", `${cocktail.strDrinkThumb}`)
    cocktailModalElements.push(image)
}

document.addEventListener("click", async (e) => {
    if (e.target.className === "modal-ingredients__list-element-button") {
        modal.style.display = "flex";
        const name = e.target.innerHTML;
        heading.textContent = name;
        const cocktail = await fetchByName(name);
        displayCocktail(cocktail)
    }
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    cocktailModalElements.forEach((item) => item.remove());
})