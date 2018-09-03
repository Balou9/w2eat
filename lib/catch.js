function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
function catchMeal (obj, recipe) {
  if (!obj.results) return new Error('Object should have a results property')

  var result = []
    if (!recipe) {
      obj.results.forEach(meal => result.push(meal.title))
    }
    else {
      obj.results.forEach(meal => result.push([meal.title, meal.href]))
    }
  return random(result)
}
module.exports = {
  catchMeal
}
