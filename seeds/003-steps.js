
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('steps').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('steps').truncate().insert([
//         {
//           recipe_id: 1,
//           step_number: 1,
//           instructions: "Place bread on a plate."
//         },
//         {
//           recipe_id: 1,
//           step_number: 2,
//           instructions: "Spread peanut butter on one slice of bread."
//         },
//         {
//           recipe_id: 1,
//           step_number: 3,
//           instructions: "Spread jelly on the other slice of bread."
//         },
//         {
//           recipe_id: 1,
//           step_number: 4,
//           instructions: "Place two slices of bread together and cut sandwich diagonally."
//         },
//         {
//           recipe_id: 2,
//           step_number: 1,
//           instructions: "Cut banana into 1/2in slices."
//         },
//         {
//           recipe_id: 2,
//           step_number: 2,
//           instructions: "Take one sliced banana piece, and spread peanut butter on the flat side."
//         },
//         {
//           recipe_id: 2,
//           step_number: 3,
//           instructions: "Take another sliced banana piece, and put it ontop of the piece you previously spread peanut butter on, to make like a sandwich."
//         },
//         {
//           recipe_id: 2,
//           step_number: 3,
//           instructions: "Melt chocolate in a bowl, and dip the banana peanut butter sandwich inside the melted chocolate."
//         },
//         {
//           recipe_id: 2,
//           step_number: 4,
//           instructions: "Freeze banana bites in freezer for 2 hours."
//         },
//         {
//           recipe_id: 3,
//           step_number: 1,
//           instructions: "Cook pasta according to directions on the box."
//         },
//         {
//           recipe_id: 3,
//           step_number: 2,
//           instructions: "Add alfredo sauce to the cooked pasta."
//         },
//       ]);
//     });
// };

exports.seed = async function(knex) {
  const steps = [
    {
      recipe_id: 1,
      step_number: 1,
      instructions: "Place bread on a plate."
    },
    {
      recipe_id: 1,
      step_number: 2,
      instructions: "Spread peanut butter on one slice of bread."
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: "Spread jelly on the other slice of bread."
    },
    {
      recipe_id: 1,
      step_number: 4,
      instructions: "Place two slices of bread together and cut sandwich diagonally."
    },
    {
      recipe_id: 2,
      step_number: 1,
      instructions: "Cut banana into 1/2in slices."
    },
    {
      recipe_id: 2,
      step_number: 2,
      instructions: "Take one sliced banana piece, and spread peanut butter on the flat side."
    },
    {
      recipe_id: 2,
      step_number: 3,
      instructions: "Take another sliced banana piece, and put it ontop of the piece you previously spread peanut butter on, to make like a sandwich."
    },
    {
      recipe_id: 2,
      step_number: 3,
      instructions: "Melt chocolate in a bowl, and dip the banana peanut butter sandwich inside the melted chocolate."
    },
    {
      recipe_id: 2,
      step_number: 4,
      instructions: "Freeze banana bites in freezer for 2 hours."
    },
    {
      recipe_id: 3,
      step_number: 1,
      instructions: "Cook pasta according to directions on the box."
    },
    {
      recipe_id: 3,
      step_number: 2,
      instructions: "Add alfredo sauce to the cooked pasta."
    }
  ]

  await knex('steps').truncate();

  return knex('steps').insert(steps);
}
