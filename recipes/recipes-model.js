const db = require("../data/dbConfig.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
   return db('recipe_ingredients')
    .join('ingredients', 'recipe_ingredients.ingredients_id', 'ingredients.id') 
    .where({ recipe_id }) 
    .select('ingredients.name', 'recipe_ingredients.ingredient_quantity')

}

function getInstructions(recipe_id) {
    return db('steps')
        .where({recipe_id})
        .select('steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number', 'asc');
}