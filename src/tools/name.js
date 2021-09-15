import { showCloseModal } from "./showCloseModal";

export const btnTwo=document.querySelector(".wrap__two");
const closeBtn= document.querySelector(".modal-coctail__close");
const modal = document.querySelector(".modal-coctail");
const input= document.querySelector(".modal-coctail__input")


showCloseModal(btnTwo, closeBtn, modal);