const { W2eat } = require('./index.js')
const { concatProcessStr } = require('concat-process-str')
const recipes = require('./recipe.js')
const program = require('commander')
const w2eat = new W2eat(recipes)

program
  .version('0.0.0')
  .description('what 2 eat')

program
  .command('w2eat')
  .description('Returns random recipe')
  .action(function () {
    console.log(w2eat.randomPick())
  })

program
  .command('mealList')
  .alias('ml')
  .description('Prints list of available meals')
  .action(function () {
      console.log(w2eat.createTitleList())
  })

program
  .command('how2cook <meal>')
  .alias('how2')
  .description('Prints ingredients + recipe of specified meal')
  .action(function () {
    concatProcessStr(process.argv, (err, data) => {
      if (err) console.error(err)
      console.log(w2eat.printRecipe(data))
    })
  })

program.parse(process.argv)
