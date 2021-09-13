export const btnFour = document.querySelector(".wrap__four");

const image = document.querySelector(".wrap-images__drink");

btnFour.addEventListener("click", () => {
        if (image.classList.contains("wrap-images__drink--shake")) {
            image.classList.remove("wrap-images__drink--shake")
        } else {
            image.classList.add("wrap-images__drink--shake")
        }
    
    setTimeout(() => {
        const modal = document.querySelector(".modal");
        modal.style.display = "block";
    }, 1300);
})


image.addEventListener("click", () => {
    if (image.classList.contains("wrap-images__drink--shake")) {
        image.classList.remove("wrap-images__drink--shake")
    } else {
        image.classList.add("wrap-images__drink--shake")
    };
    setTimeout(() => {
        const modal = document.querySelector(".modal");
        modal.style.display = "block";
    }, 1500);
})