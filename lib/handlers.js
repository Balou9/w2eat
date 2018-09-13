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
    var result = []
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].title === choice) result = obj[i]
    }
  debug('where the meal at')
  cb(null, { choice, result } )
}

// print getAvailableMeals so user has to pick one
function getAvailableMeals (obj, cb) {
  const result = []
  obj.results.map(meal => result.push(meal.title))
  cb(null, result)
}

module.exports = {
  catchMeal,
  chooseMeal,
  getAvailableMeals
}
