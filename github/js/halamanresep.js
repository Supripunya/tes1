function showRecipe(recipeId) {
    const recipes = document.querySelectorAll('.recipe');
    recipes.forEach(recipe => recipe.classList.add('hidden'));

    const selectedRecipe = document.getElementById(recipeId);
    selectedRecipe.classList.remove('hidden');

    const recipeDetails = document.getElementById('recipe-details');
    recipeDetails.classList.remove('hidden');
}
