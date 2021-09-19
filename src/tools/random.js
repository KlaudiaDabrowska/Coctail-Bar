export const btnFour = document.querySelector(".wrap__four");
const closeBtn = document.querySelector(".modal-random__close");
const modal = document.querySelector(".modal-random");
const heading = document.querySelector(".modal-random__heading");
const description = document.querySelector(".modal-random__description");
const ingredients = document.querySelector(".modal-random__ingredients");
const recipe = document.querySelector(".modal-random__recipe");
const image = document.querySelector(".wrap-images__drink");
const randomCocktailModalElements = [];

const shakeDrinkShowModal = () => {
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
    randomCocktailModalElements.forEach((item) => item.remove());
    modal.style.display = "none";
})

const fetchAlcoholicCocktails = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => data.drinks)
}

const fetchCocktail = (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
}

const getRandomCocktail = async () => {
    const alcoholicCocktails = await fetchAlcoholicCocktails();
    return alcoholicCocktails[Math.floor(Math.random() * alcoholicCocktails.length)];
}

const displayCocktail = (cocktail) => {

    for (let i = 1; i < 16; i++) {
        if(cocktail[`strIngredient${i}`] == null){
            break;
        }
        const ingredient = document.createElement("li");
        ingredients.appendChild(ingredient);
        ingredient.innerHTML = cocktail[`strIngredient${i}`];
        randomCocktailModalElements.push(ingredient);
    }
    
    const recipeParagraph = document.createElement("p");
    recipe.appendChild(recipeParagraph);
    recipeParagraph.innerHTML = cocktail.strInstructions;
    randomCocktailModalElements.push(recipeParagraph)

    const image = document.createElement("img");
    description.appendChild(image);
    image.setAttribute("src", `${cocktail.strDrinkThumb}`)
    randomCocktailModalElements.push(image)
}

btnFour.addEventListener("click", async () => {
    const randomCocktail = await getRandomCocktail();
    heading.textContent = randomCocktail.strDrink;
    const cocktail = await fetchCocktail(randomCocktail.idDrink);
    displayCocktail(cocktail);
})

image.addEventListener("click", async () => {
    const randomCocktail = await getRandomCocktail();
    heading.textContent = randomCocktail.strDrink;
    const cocktail = await fetchCocktail(randomCocktail.idDrink);
    displayCocktail(cocktail);
})