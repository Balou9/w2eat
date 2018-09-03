function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
function catchMeal (obj, recipe) {
  var result = []
  if (!recipe) { obj.results.forEach(meal => result.push(meal.title)) }
  else { obj.results.forEach(meal => result.push([meal.title, meal.href])) }
  return random(result)
}

function chooseMeal (choice, arr, cb) {
  if (typeof arr !== 'array') cb(new Error('second argument should be array'))
  cb(null, choice, arr)
}

module.exports = {
  catchMeal,
  chooseMeal
}
