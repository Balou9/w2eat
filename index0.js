function random (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function W2eat (obj) {
  this.obj = obj
}

W2eat.prototype.listMeals = function () {
  return this.obj.results.map(each => each.title)
}

W2eat.prototype.printRecipe = function (meal) {
  return this.obj.results.map(each => (meal === each.title) ? [each.title, each.how2cook] : null)
}

module.exports = W2eat
