import { showModal } from "./showModal";
import { closeModal } from "./closeModal";
import { fetchByIngredient } from "./fetchCocktails";
import { cleanModal } from "./cleanModal";
import { submitByClick, submitByEnter } from "./submit";
import { displayCocktailsList } from "./displayCocktailsList";

export const btnByIngredients = document.querySelector(".wrap__one");
const closeBtn = document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const input = document.querySelector(".modal-ingredients__input")
const cocktailsElList = document.querySelector(".modal-ingredients__list");
const submit = document.querySelector(".modal-ingredients__submit");
const div = document.createElement("div");


// const displayCocktailsList = (cocktailsName) => {
//     cocktailsName.forEach((cocktailName) => {
//         const liElement = document.createElement("li");
//         liElement.className = "modal-ingredients__list-element";
//         cocktailsElList.appendChild(liElement);
//         const cocktailBtn = document.createElement("button")
//         cocktailBtn.className = "modal-ingredients__list-element-button";
//         liElement.appendChild(cocktailBtn);
//         cocktailBtn.innerHTML = cocktailName.strDrink;
//     })
// }

// displayCocktailsList(cocktailsName);

const onSubmit = async () => {
    cleanModal(cocktailsElList, div);
    const cocktailsName = await fetchByIngredient(input.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName, cocktailsElList);
    } else {
        div.className = "modal-ingredients__list-warning";
        modal.appendChild(div);
        div.textContent = "There is no such ingredient!";
    }
}


// submit.addEventListener("click", () => {
//     onSubmit();
// })

submitByClick(submit, onSubmit);
submitByEnter(modal, onSubmit);


// modal.addEventListener("keyup", (e) => {
//     if (e.key === "Enter"){
//         onSubmit();
//     }
// })

closeBtn.addEventListener("click", () => {
    cleanModal(cocktailsElList, div);
    input.value = "";
})

showModal(btnByIngredients, modal);
closeModal(closeBtn, modal);
cleanModal(cocktailsElList, div);
