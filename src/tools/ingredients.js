import {
    showCloseModal
} from './showCloseModal';

export const btnOne = document.querySelector(".wrap__one");
const closeBtn = document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const input = document.querySelector(".modal-ingredients__input")
const cocktailsElList = document.querySelector(".modal-ingredients__list");
const submit = document.querySelector(".modal-ingredients__submit");
const div = document.createElement("div");

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
        return [];
    }
}

const cleanModal = () => {
    cocktailsElList.innerHTML = "";
    div.innerHTML = "";
}

const addScrollbar = () => {
    if (cocktailsElList.childElementCount >= 45) {
        modal.style.overflow = "scroll";
        modal.style.overflowX = "hidden";
    }
}

const removeScrollbar = () => {
    modal.style.overflow = "visible";
}

const displayCocktailsList = (cocktailsName) => {
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

const onSubmit = async () => {
    cleanModal();
    const cocktailsName = await fetchByIngredient(input.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName);
        addScrollbar();
    } else {
        div.className = "modal-ingredients__list-warning";
        modal.appendChild(div);
        div.textContent = "There is no such ingredient!";
        addScrollbar();
    }
}

submit.addEventListener("click", () => {
    onSubmit();
    removeScrollbar();
})

document.addEventListener("keyup", (e) => {
    if (e.code === 13) {
        onSubmit();
        removeScrollbar();
    }
})

closeBtn.addEventListener("click", () => {
    cleanModal();
    removeScrollbar();
    input.value = "";
})