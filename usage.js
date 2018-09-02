const w2eatApiCall = require('./index.js')
const catchMeal = require('./catchmeal.js')
const url = 'http://www.recipepuppy.com/api/'

w2eatApiCall(url, (err, data) => {
  if (err) return err
  console.log(catchMeal(data))
})
