
// exports.seed = function(knex) {
//   //Delete all existing data
//     return knex('ingredients').del()
//       .then(function () {
//         knex('ingredients').truncate().insert([
//           {name: "Slice of Bread"},
//           {name: "Tablespoon of Peanut Butter"},
//           {name: "Tablespoon of Jelly"},
//           {name: "Banana"},
//           {name: "Ounce of Dark Chocolate Chips"},
//           {name: "Box of Fettuccine Pasta"},
//           {name: "Cup of Vegan Alfredo Sauce"}
//         ]);
//       });
// };


exports.seed = async function(knex) {
  const ingredients = [
      {name: "Slice of Bread"},
      {name: "Tablespoon of Peanut Butter"},
      {name: "Tablespoon of Jelly"},
      {name: "Banana"},
      {name: "Ounce of Dark Chocolate Chips"},
      {name: "Box of Fettuccine Pasta"},
      {name: "Cup of Vegan Alfredo Sauce"}
  ]

  await knex('ingredients').truncate();

  return knex('ingredients').insert(ingredients);
}