
// exports.seed = function(knex) {
//   //Delete all existing data
//     return knex('recipes').del()
//       .then(function() {
//         knex('recipes').truncate().insert([
//           {name: "PB&J Sandwich"},
//           {name: "Banana Bites"},
//           {name: "Vegan Alfredo Pasta"}
//         ]);
//       });
// };


exports.seed = async function(knex) {
  const recipes = [
    {name: "PB&J Sandwich"},
    {name: "Banana Bites"},
    {name: "Vegan Alfredo Pasta"}
  ]

  await knex('recipes').truncate();

  return knex('recipes').insert(recipes);
}
