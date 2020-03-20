
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('recipe_ingredients').del()
//     .then(function () {
//       // Inserts seed entries
//         knex('recipe_ingredients').insert([
//         {
//           recipe_id: 1,
//           ingredients_id: 1,
//           ingredient_quantity: 2 
//         },
//         {
//           recipe_id: 1,
//           ingredients_id: 2,
//           ingredient_quantity: 2 
//         },
//         {
//           recipe_id: 1,
//           ingredients_id: 3,
//           ingredient_quantity: 2 
//         },
//         {
//           recipe_id: 2,
//           ingredients_id: 2,
//           ingredient_quantity: 3 
//         },
//         {
//           recipe_id: 2,
//           ingredients_id: 4,
//           ingredient_quantity: 1
//         },
//         {
//           recipe_id: 2,
//           ingredients_id: 5,
//           ingredient_quantity: 3
//         },
//         {
//           recipe_id: 3,
//           ingredients_id: 6,
//           ingredient_quantity: 1 
//         },
//         {
//           recipe_id: 3,
//           ingredients_id: 7,
//           ingredient_quantity: 1.5 
//         },
//       ]);
//     });
// };


exports.seed = async function(knex) {
  const ingredientsForRecipe = [
    {
      recipe_id: 1,
      ingredients_id: 1,
      ingredient_quantity: 2 
    },
    {
      recipe_id: 1,
      ingredients_id: 2,
      ingredient_quantity: 2 
    },
    {
      recipe_id: 1,
      ingredients_id: 3,
      ingredient_quantity: 2 
    },
    {
      recipe_id: 2,
      ingredients_id: 2,
      ingredient_quantity: 3 
    },
    {
      recipe_id: 2,
      ingredients_id: 4,
      ingredient_quantity: 1
    },
    {
      recipe_id: 2,
      ingredients_id: 5,
      ingredient_quantity: 3
    },
    {
      recipe_id: 3,
      ingredients_id: 6,
      ingredient_quantity: 1 
    },
    {
      recipe_id: 3,
      ingredients_id: 7,
      ingredient_quantity: 1.5 
    },
  ]

  await knex('recipe_ingredients').truncate();

  return knex('recipe_ingredients').insert(ingredientsForRecipe);
}