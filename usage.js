const w2eatApiCall = require('./index.js')
const {
  catchMeal,
  chooseMeal } = require('./lib/handlers.js')

const url = 'http://www.recipepuppy.com/api/'

w2eatApiCall(url, (err, data) => {
  if (err) return err
  console.log(catchMeal(data, true))
})

w2eatApiCall(url, (err, meals) => {
  if (err) return err
  const titleArray = catchMeal(meals)
  chooseMeal('Chocolate-Cherry Thumbprints', titleArray, (err, result) => {
    if (err) return err
    console.log(result)
  })
})
