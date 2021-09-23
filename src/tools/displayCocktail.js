export const displayCocktail = (cocktail, ingredientsList, description, modalElementsArray) => {
    for (let i = 1; i < 16; i++) {
        if (cocktail[`strIngredient${i}`] == null) {
            break;
        }
        const ingredient = document.createElement("li");
        ingredient.className = "modal-recipe__list-element";
        ingredientsList.appendChild(ingredient);
        ingredient.innerHTML = cocktail[`strIngredient${i}`];
        modalElementsArray.push(ingredient);
    }

    const recipeParagraph = document.createElement("p");
    recipeParagraph.className = "modal-recipe__recipe-info";
    description.appendChild(recipeParagraph);
    recipeParagraph.innerHTML = cocktail.strInstructions;
    modalElementsArray.push(recipeParagraph)

    const image = document.createElement("img");
    description.appendChild(image);
    image.setAttribute("src", `${cocktail.strDrinkThumb}`)
    modalElementsArray.push(image)
}