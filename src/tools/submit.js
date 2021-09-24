function submitByClickListener (submitBtn, onSubmit) {
    submitBtn.addEventListener("click", () => {
        onSubmit();
    })
}

function submitByEnterListener (modal, onSubmit) {
    modal.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    })
}

export { submitByClickListener, submitByEnterListener }