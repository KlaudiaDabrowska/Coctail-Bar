export const btnFour = document.querySelector(".wrap__four");
const closeBtn = document.querySelector(".modal-random__close");
const modal = document.querySelector(".modal-random");
const heading = document.querySelector(".modal-random__heading");
const description = document.querySelector(".modal-random__description");
const ingredients = document.querySelector(".modal-random__ingredients");
const recipe = document.querySelector(".modal-random__recipe");
const image = document.querySelector(".wrap-images__drink");
const randomCoctailModalElements = [];

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
    randomCoctailModalElements.forEach((item) => item.remove());
    modal.style.display = "none";
})

const fetchAlcoholicCoctails = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => data.drinks)
}

const fetchDrink = async (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
}

const getRandomCoctail = async () => {
    const alcoholicCoctails = await fetchAlcoholicCoctails();
    return alcoholicCoctails[Math.floor(Math.random() * alcoholicCoctails.length)];
}

const displayCoctail = (drink) => {

    for (let i = 1; i < 16; i++) {
        const ingredient = document.createElement("li");
        ingredients.appendChild(ingredient);
        ingredient.innerHTML = drink[`strIngredient${i}`];
        randomCoctailModalElements.push(ingredient);
    }
    
    heading.textContent = randomDrink.strDrink;

    const recipeParagraph = document.createElement("p");
    recipe.appendChild(recipeParagraph);
    recipeParagraph.innerHTML = drink.strInstructions;
    randomCoctailModalElements.push(recipeParagraph)

    const image = document.createElement("img");
    description.appendChild(image);
    image.setAttribute("src", `${drink.strDrinkThumb}`)
    randomCoctailModalElements.push(image)
}

btnFour.addEventListener("click", async () => {
    const randomDrink = await getRandomCoctail();
    const drink = await fetchDrink(randomDrink.idDrink);
    displayCoctail(drink);
})

image.addEventListener("click", async () => {
    const randomDrink = await getRandomCoctail();
    const drink = await fetchDrink(randomDrink.idDrink);
    displayCoctail(drink);
})