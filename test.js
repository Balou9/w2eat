const tape = require('tape')
const w2eat = require('./index.js')
const recipes = require('./recipe.js')

tape('listMeals - title - pass', t => {
  const W2eat = new w2eat(recipes)
  t.true(W2eat.listMeals())
  t.end()
})


tape('printRecipe - title - pass', t => {
  const W2eat = new w2eat(recipes)
  t.true(W2eat.printRecipe())
  t.end()
})
