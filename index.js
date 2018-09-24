function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function catchMeal (obj, recipe, cb) {
  var result = []
  if (!recipe) { obj.results.forEach(meal => result.push(meal.title)) }
  else { obj.results.forEach(meal => result.push([meal.title, meal.how2cook])) }
  cb(null, random(result))
}

function chooseMeal (choice, obj, cb) {
  if (typeof choice !== 'string') cb(new Error('first arg should be string'))
  if (typeof obj !== 'object') cb(new Error('second arg should be obj'))
  obj = obj.results
    var result = []
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].title === choice) result = obj[i]
    }
  cb(null, result)
}

function getAvailableMeals (obj, cb) {
  var result = []
  obj.results.map(meal => result.push(meal.title))
  cb(null, result)
}

module.exports = {
  catchMeal,
  chooseMeal,
  getAvailableMeals
}
