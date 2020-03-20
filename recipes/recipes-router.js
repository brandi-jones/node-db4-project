const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipe => {
    res.json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get shopping list' });
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get instructions' });
        })
})


module.exports = router;