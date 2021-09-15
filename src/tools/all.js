import { showCloseModal } from "./showCloseModal";

export const btnThree=document.querySelector(".wrap__three");
const closeBtn= document.querySelector(".modal-all-coctails__close");
const modal = document.querySelector(".modal-all-coctails");
const input= document.querySelector(".modal-all-coctails__input");

showCloseModal(btnThree, closeBtn, modal, input);