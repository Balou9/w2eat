const recipes = require('./recipe.js')

function W2eat (obj) {
  if (!(this instanceof W2eat)) {
    return new W2eat(obj)
  }
  this.obj = obj
}

W2eat.prototype.createTitleList = function () {
  return this.obj.results.map(each => each.title)
}

W2eat.prototype.printRecipe = function (meal) {
  return this.obj.results.find(each => each.title === meal)
}

module.exports = {
  W2eat
}
