const w2eatApiCall = require('./index.js')
const recipes = require('./lib/recipe.js')
const {
  catchMeal,
  chooseMeal,
  getAvailableMeals
} = require('./lib/handlers.js')

const url = 'http://www.recipepuppy.com/api/'

// w2eatApiCall(url, (err, meals) => {
// if (err) return err
//   chooseMeal(0, meals, (err, result) => {
//     if (err) return err
//     console.log(result)
//   })
// })

// w2eatApiCall(url, (err, meals) => {
//   if (err) return err
//   getAvailableMeals(meals, (err, result) => {
//     if (err) return err
//     console.log(result)
//   })
// })

// w2eatApiCall(url, (err, meals) => {
//   if (err) return err
//   console.log(meals)
// })

chooseMeal('Köfte', recipes, (err, data) => {
  if (err) return err
  console.log(data)
})

catchMeal(recipes, true, (err, data) => {
  if (err) return err
  console.log(data)
})

getAvailableMeals(recipes, (err, data) => {
  if (err) return err
  console.log(data)
})
