import {
    fetchAlcoholicCocktails,
    fetchCocktailById as fetchCocktail
} from "./fetchCocktails";
import {
    displayCocktail
} from "./displayCocktail";

export const btnRandomCocktail = document.querySelector(".wrap__random");
const closeBtn = document.querySelector(".modal-recipe__close");
const modal = document.querySelector(".modal-recipe");
const heading = document.querySelector(".modal-recipe__heading");
const description = document.querySelector(".modal-recipe__description");
const ingredientsList = document.querySelector(".modal-recipe__list");
const drinkImage = document.querySelector(".wrap-images__drink");
const randomCocktailModalElements = [];

const shakeDrinkShowModal = () => {
    drinkImage.classList.add("wrap-images__drink--shake");
    setTimeout(() => {
        drinkImage.classList.remove("wrap-images__drink--shake")
    }, 1000);

    setTimeout(() => {
        modal.style.display = "flex";
    }, 1100);
}

const getRandomCocktail = async () => {
    const alcoholicCocktails = await fetchAlcoholicCocktails();
    return alcoholicCocktails[Math.floor(Math.random() * alcoholicCocktails.length)];
}

const displayInfoAboutCocktail = async () => {
    const randomCocktail = await getRandomCocktail();
    heading.textContent = randomCocktail.strDrink;
    const cocktail = await fetchCocktail(randomCocktail.idDrink);
    displayCocktail(cocktail, ingredientsList, description, randomCocktailModalElements);
}

btnRandomCocktail.addEventListener("click", () => {
    shakeDrinkShowModal();
    displayInfoAboutCocktail();
})

drinkImage.addEventListener("click", () => {
    shakeDrinkShowModal();
    displayInfoAboutCocktail();
})

closeBtn.addEventListener("click", () => {
    randomCocktailModalElements.forEach((item) => item.remove());
    modal.style.display = "none";
})