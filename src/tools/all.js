import { showCloseModal } from "./showCloseModal";

export const btnThree=document.querySelector(".wrap__three");
const closeBtn= document.querySelector(".modal-all-cocktails__close");
const modal = document.querySelector(".modal-all-cocktails");
const input= document.querySelector(".modal-all-cocktails__input");

showCloseModal(btnThree, closeBtn, modal, input);