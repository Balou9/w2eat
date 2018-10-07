const w2eat = require('./index.js')
const recipes = require('./recipe.js')
const W2eat = new w2eat(recipes)

console.log(W2eat)
console.log(W2eat.listMeals())
console.log(W2eat.printRecipe('Köfte'))
