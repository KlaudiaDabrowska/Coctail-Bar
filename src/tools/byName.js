import { showModal } from "./showModal";
import { closeModal } from "./closeModal";
import { fetchCocktailsByName as fetchByName } from "./fetchCocktails";
import { cleanModal } from "./cleanModal";
import { submitByClick, submitByEnter } from "./submit";
import { displayCocktailsList } from "./displayCocktailsList";


export const btnByName=document.querySelector(".wrap__two");
const closeBtn= document.querySelector(".modal-cocktail__close");
const modal = document.querySelector(".modal-cocktail");
const input= document.querySelector(".modal-cocktail__input");
const submit= document.querySelector(".modal-cocktail__submit");
const cocktailsElList = document.querySelector(".modal-cocktail__list");
const div = document.createElement("div");


// const displayCocktailsList = (cocktailsName) => {
//     cocktailsName.forEach((cocktailName) => {
//         const liElement = document.createElement("li");
//         liElement.className = "modal-cocktail__list-element";
//         cocktailsElList.appendChild(liElement);
//         const cocktailBtn = document.createElement("button")
//         cocktailBtn.className = "modal-ingredients__list-element-button";
//         liElement.appendChild(cocktailBtn);
//         cocktailBtn.innerHTML = cocktailName.strDrink;
//     })
// }

const onSubmit = async () => {
    cleanModal(cocktailsElList, div);
    const cocktailsName = await fetchByName(input.value);
    if (cocktailsName.length !== 0) {
        displayCocktailsList(cocktailsName, cocktailsElList);
    } else {
        div.className = "modal-ingredients__list-warning";
        modal.appendChild(div);
        div.textContent = "There is no such cocktail!";
    }
}

// submit.addEventListener("click", () => {
//     onSubmit();
// })

submitByClick(submit,onSubmit);
submitByEnter(modal, onSubmit);


// modal.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         onSubmit();
//     }
// })

closeBtn.addEventListener("click", () => {
    cleanModal(cocktailsElList, div);
    input.value = "";
})

showModal(btnByName, modal);
closeModal(closeBtn, modal);
cleanModal(cocktailsElList, div);
