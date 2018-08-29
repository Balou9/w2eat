const w2eatApiCall = require('./index.js')
const catchMeal = require('./catchmeal.js')
const url = 'http://www.recipepuppy.com/api/'

w2eatApiCall(url, function (err, data) {
  if (err) throw err
  data = catchMeal(data)
  console.log(data)
})
