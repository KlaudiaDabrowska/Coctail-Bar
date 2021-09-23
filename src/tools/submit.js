function submitByClick (submit, onSubmit) {
    submit.addEventListener("click", () => {
        onSubmit();
    })
}

function submitByEnter (modal, onSubmit) {
    modal.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    })
}

export { submitByClick, submitByEnter }