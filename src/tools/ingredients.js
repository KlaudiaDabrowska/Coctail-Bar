import {
    showCloseModal
} from './showCloseModal';

export const btnOne = document.querySelector(".wrap__one");
const closeBtn = document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const input = document.querySelector(".modal-ingredients__input")

showCloseModal(btnOne, closeBtn, modal);

const ingredient = input.value;

const fetchByIngredients = () => {
    fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`)
        .then(res => res.text())
        .then(data => {
            console.log(data)
        })
}

fetchByIngredients();