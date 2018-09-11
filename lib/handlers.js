const debug = require('debug')('w2eat')

function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// optional return recipe when recipe true
function catchMeal (obj, recipe, cb) {
  var result = []
  if (!recipe) {
    obj.results.forEach(meal => result.push(meal.title)) }
  else { obj.results.forEach(meal => result.push([meal.title, meal.href])) }
  cb(null, random(result))
}

// chooseMeal by pattern
function chooseMeal (choice, obj, cb) {
  if (typeof choice !== 'string') cb(new Error('first arg should be string'))
  if (typeof obj !== 'object') cb(new Error('second arg should be obj'))

  obj = obj.results
  var N = Object.keys(obj.length)
  var result = []

  for (var i = 0; i < N; i++) {
    if (obj.title[i] === choice) {
      result.push(obj[i])
    } else {
      result.push(undefined)
    }
  }

  debug('where the meal at')
  cb(null, { choice, obj } )
}

// print getAvailableMeals so user has to pick one
function getAvailableMeals (obj) {

}

module.exports = {
  catchMeal,
  chooseMeal
}
