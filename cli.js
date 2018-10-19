const { W2eat } = require('./index.js')
const recipes = require('./recipe.js')
const program = require('commander')
const w2eat = new W2eat(recipes)

program
  .version('0.0.0')
  .description('what 2 eat')

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
  .action(function (meal) {
    (process.argv.length > 4) ? process.argv[3] += process.argv[4] : null
    console.log(w2eat.printRecipe(meal), process.argv, process.argv.length)
  })

program.parse(process.argv)
// concat strings in process.argv to one string besides current directory
