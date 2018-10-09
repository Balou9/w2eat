const tape = require('tape')
const recipes = require('./recipe.js')
const { logger, W2eat } = require('./index.js')

tape('createTitleList - pass', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.createTitleList())
  t.end()
})


tape('printRecipe - pass', t => {
  const w2eat = new W2eat(recipes)
  t.true(w2eat.printRecipe('Köfte'))
  t.end()
})

tape('Print one item per line - pass', t => {
  const w2eat = new W2eat(recipes)
  const arr = ['Rondo', 'Numba', 'Nine', 'Two', 'The Duce']
  t.true(logger(arr))
  t.end()
})
