const { W2eat } = require('./index.js')
const recipes = require('./recipe.js')
const w2eat = new W2eat(recipes)

console.log(w2eat.randomPick())
console.log(w2eat.createTitleList())
console.log(w2eat.printRecipe('Bandnudeln mit Avocado und Shrimps'))
