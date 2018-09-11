const w2eatApiCall = require('./index.js')
const {
  catchMeal,
  chooseMeal } = require('./lib/handlers.js')

const url = 'http://www.recipepuppy.com/api/'

w2eatApiCall(url, (err, meals) => {
if (err) return err
  chooseMeal('Chocolate-Cherry Thumbprints', meals, (err, result) => {
    if (err) return err
    console.log('w2eat chooseMeal with choice:  ', result)
  })
})
