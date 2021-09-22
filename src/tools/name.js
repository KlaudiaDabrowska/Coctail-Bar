import { showCloseModal } from "./showCloseModal";

export const btnTwo=document.querySelector(".wrap__two");
const closeBtn= document.querySelector(".modal-cocktail__close");
const modal = document.querySelector(".modal-cocktail");
const input= document.querySelector(".modal-cocktail__input");
const submit= document.querySelector(".modal-cocktail__submit");
const cocktailsElList = document.querySelector(".modal-cocktail__list");
const div = document.createElement("div");


showCloseModal(btnTwo, closeBtn, modal);

const fetchByName = (name) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => data.drinks)
};

const cleanModal = () => {
    cocktailsElList.innerHTML = "";
    div.innerHTML = "";
}

const displayCocktailsList = (cocktailsName) => {
    cocktailsName.forEach((cocktailName) => {
        const liElement = document.createElement("li");
        liElement.className = "modal-cocktail__list-element";
        cocktailsElList.appendChild(liElement);
        const cocktailBtn = document.createElement("button")
        cocktailBtn.className = "modal-ingredients__list-element-button";
        liElement.appendChild(cocktailBtn);
        cocktailBtn.innerHTML = cocktailName.strDrink;
    })
}

const onSubmit = async () => {
    cleanModal();
    const cocktailsName = await fetchByName(input.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName);
    } else {
        div.className = "modal-ingredients__list-warning";
        modal.appendChild(div);
        div.textContent = "There is no such ingredient!";
    }
}

submit.addEventListener("click", () => {
    onSubmit();
})

modal.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        onSubmit();
    }
})

closeBtn.addEventListener("click", () => {
    cleanModal();
    input.value = "";
})