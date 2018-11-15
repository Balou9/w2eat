const tape = require('tape')
const recipes = require('./recipe.js')
const { W2eat } = require('./index.js')

tape('createTitleList - pass', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.createTitleList())
  t.end()
})

tape('printRecipe - pass - pt1', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.printRecipe('Köfte'))
  t.end()
})

tape('printRecipe - pass - pt2', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.printRecipe('Lachs in Weißwein-Orangen-Sauce'))
  t.end()
})


tape('randomPick - pass', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.randomPick())
  t.end()
})
