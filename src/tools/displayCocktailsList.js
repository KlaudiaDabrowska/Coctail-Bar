export const displayCocktailsList = (cocktailsName, cocktailsElList) => {
    cocktailsName.forEach((cocktailName) => {
        const liElement = document.createElement("li");
        liElement.className = "modal-ingredients__list-element";
        cocktailsElList.appendChild(liElement);
        const cocktailBtn = document.createElement("button")
        cocktailBtn.className = "modal-ingredients__list-element-button";
        liElement.appendChild(cocktailBtn);
        cocktailBtn.innerHTML = cocktailName.strDrink;
    })
}