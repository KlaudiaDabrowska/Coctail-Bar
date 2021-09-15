function showCloseModal(btn, closeBtn, modal) {
    btn.addEventListener("click", () => {
        modal.style.display = "flex"
    })

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"
    })
}

export {showCloseModal};
