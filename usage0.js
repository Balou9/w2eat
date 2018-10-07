const w2eat = require('./index0.js')
const recipes = require('./recipe.js')

const url = 'http://www.recipepuppy.com/api/'

const W2eat = new w2eat(recipes)

console.log(W2eat.listMeals())
console.log(W2eat.printRecipe('Köfte'))
