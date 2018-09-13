const w2eatApiCall = require('./index.js')
const {
  catchMeal,
  chooseMeal,
  getAvailableMeals
} = require('./lib/handlers.js')

const url = 'http://www.recipepuppy.com/api/'

w2eatApiCall(url, (err, meals) => {
if (err) return err
  chooseMeal(0, meals, (err, result) => {
    if (err) return err
    console.log(result)
  })
})

w2eatApiCall(url, (err, meals) => {
  if (err) return err
  getAvailableMeals(meals, (err, result) => {
    if (err) return err
    console.log(result)
  })
})
