export const btnOne=document.querySelector(".wrap__one");
const closeBtn= document.querySelector(".modal-ingredients__close");
const modal = document.querySelector(".modal-ingredients");
const input= document.querySelector("input")


btnOne.addEventListener("click", () =>{
    modal.style.display="flex"
})

closeBtn.addEventListener("click", () =>{
    modal.style.display="none"
})