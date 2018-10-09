const { W2eat, logger } = require('./index.js')
const recipes = require('./recipe.js')
const w2eat = new W2eat(recipes)
const arr = w2eat.createTitleList()

console.log(logger(arr))
console.log(w2eat.createTitleList())
console.log(w2eat.printRecipe('Köfte'))
