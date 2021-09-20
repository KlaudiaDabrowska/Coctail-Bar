import { showCloseModal } from "./showCloseModal";

export const btnTwo=document.querySelector(".wrap__two");
const closeBtn= document.querySelector(".modal-cocktail__close");
const modal = document.querySelector(".modal-cocktail");
const input= document.querySelector(".modal-cocktail__input")


showCloseModal(btnTwo, closeBtn, modal);