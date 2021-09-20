import {
    showCloseModal
} from './showCloseModal';

export const btnOne = document.querySelector(".wrap__one");
const closeBtn = document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const input = document.querySelector(".modal-ingredients__input")
const cocktailsElList = document.querySelector(".modal-ingredients__list");
const submit = document.querySelector(".modal-ingredients__submit");

showCloseModal(btnOne, closeBtn, modal);

const fetchByIngredient = async (ingredient) => {
    // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    // .then(res => res.data)
    // .then(data => data.drinks || [])
    // .catch((error) => [])

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    try {
        const data = await response.json();
        return data.drinks || []
    } catch (error) {
        console.log(response)
        return [];
    }
}

const displayCocktailsList = (cocktailsName) => {
    if (!cocktailsName) {
        cocktailsElList.textContent = "";
        input.value = "";
    } else {
        cocktailsName.forEach((cocktailName) => {
            const liElement = document.createElement("li");
            liElement.className = "modal-ingredients__list-element";
            cocktailsElList.appendChild(liElement);
            const cocktailBtn = document.createElement("button")
            cocktailBtn.className = "modal-ingredients__list-element-button";
            liElement.appendChild(cocktailBtn);
            cocktailBtn.innerHTML = cocktailName.strDrink;
        })
    }
}

const onSubmit = async () => {
    const cocktailsName = await fetchByIngredient(input.value);
    if (cocktailsName.length === 0) {
        const div = document.createElement("div");
        div.className = "modal-ingredients__list-warning";
        modal.appendChild(div);
        div.textContent = "There is no such ingredient!"
    }
    displayCocktailsList(cocktailsName)
}

submit.addEventListener("click", onSubmit)

closeBtn.addEventListener("click", () => {
    displayCocktailsList(null)
})