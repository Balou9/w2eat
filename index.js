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

W2eat.prototype.randomPick = function () {
  return this.obj.results[Math.floor(Math.random() * this.obj.results.length)]
}

module.exports = {
  W2eat
}
