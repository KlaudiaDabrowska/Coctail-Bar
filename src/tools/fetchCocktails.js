const fetchAlcoholicCocktails = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => data.drinks)
}

const fetchCocktailById = (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
}

const fetchByIngredient = async (ingredient) => {
    // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    // .then(res => res.data)
    // .then(data => data.drinks || [])
    // .catch((error) => [])

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    try {
        const data = await response.json();
        return data.drinks || []
    } catch (error) {
        return [];
    }
}

const fetchOneCocktail = (name) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
}

const fetchCocktailsByName = (name) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => data.drinks || [])
        .catch((error) => [])
};


export { fetchAlcoholicCocktails, fetchCocktailById, fetchByIngredient, fetchOneCocktail, fetchCocktailsByName }