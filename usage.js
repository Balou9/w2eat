const w2eat = require('./index.js')
const recipes = require('./recipe.js')

const url = 'http://www.recipepuppy.com/api/'

w2eat.chooseMeal('Köfte', recipes, (err, data) => {
  if (err) return err
  console.log(data)
})

w2eat.catchMeal(recipes, true, (err, data) => {
  if (err) return err
  console.log(data)
})

w2eat.getAvailableMeals(recipes, (err, data) => {
  if (err) return err
  console.log(data)
})
