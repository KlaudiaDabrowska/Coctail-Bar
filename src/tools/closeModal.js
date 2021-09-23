function closeModal (closeBtn, modal) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
}

export {closeModal}