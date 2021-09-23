import {
    fetchAlcoholicCocktails,
    fetchCocktailById as fetchCocktail
} from "./fetchCocktails";
import {
    displayCocktail
} from "./displayCocktail";

export const btnRandomCocktail = document.querySelector(".wrap__four");
const closeBtn = document.querySelector(".modal-random__close");
const modal = document.querySelector(".modal-random");
const heading = document.querySelector(".modal-random__heading");
const description = document.querySelector(".modal-random__description");
const ingredientsList = document.querySelector(".modal-random__list");
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

// const displayCocktail = (cocktail) => {

//     for (let i = 1; i < 16; i++) {
//         if(cocktail[`strIngredient${i}`] == null){
//             break;
//         }
//         const ingredient = document.createElement("li");
//         ingredientsList.appendChild(ingredient);
//         ingredient.innerHTML = cocktail[`strIngredient${i}`];
//         randomCocktailModalElements.push(ingredient);
//     }

//     const recipeParagraph = document.createElement("p");
//     recipeParagraph.className = "modal-random__recipe-info";
//     description.appendChild(recipeParagraph);
//     recipeParagraph.innerHTML = cocktail.strInstructions;
//     randomCocktailModalElements.push(recipeParagraph)

//     const image = document.createElement("img");
//     description.appendChild(image);
//     image.setAttribute("src", `${cocktail.strDrinkThumb}`)
//     randomCocktailModalElements.push(image)
// }

const displayInfoAboutCocktail = async () => {
    const randomCocktail = await getRandomCocktail();
    heading.textContent = randomCocktail.strDrink;
    const cocktail = await fetchCocktail(randomCocktail.idDrink);
    displayCocktail(cocktail, ingredientsList, description, randomCocktailModalElements);
}

btnRandomCocktail.addEventListener("click", () => {
    shakeDrinkShowModal();
    displayInfoAboutCocktail();
    // const randomCocktail = await getRandomCocktail();
    // heading.textContent = randomCocktail.strDrink;
    // const cocktail = await fetchCocktail(randomCocktail.idDrink);
    // displayCocktail(cocktail, ingredientsList, description, randomCocktailModalElements);
})

drinkImage.addEventListener("click", () => {
    shakeDrinkShowModal();
    displayInfoAboutCocktail();
    // const randomCocktail = await getRandomCocktail();
    // heading.textContent = randomCocktail.strDrink;
    // const cocktail = await fetchCocktail(randomCocktail.idDrink);
    // displayCocktail(cocktail, ingredientsList, description, randomCocktailModalElements);
})

closeBtn.addEventListener("click", () => {
    randomCocktailModalElements.forEach((item) => item.remove());
    modal.style.display = "none";
})