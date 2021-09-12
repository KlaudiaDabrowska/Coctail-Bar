import '../src/sass/style.scss'


const btn1=document.querySelector(".wrap__one");

btn1.addEventListener("click", () =>{
    const modal = document.querySelector(".modal");
    modal.style.display="block"
})