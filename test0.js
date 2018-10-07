const tape = require('tape')
const w2eat = require('./index.js')
const recipes = require('./recipe.js')

tape('catchMeal - title - pass', t => {
  w2eat.catchMeal(recipes, undefined, (err, meal) => {
    if (err) t.end(err)
    t.true(meal)
    t.end()
  })
})

tape('catchMeal - recipe - pass', t => {
  w2eat.catchMeal(recipes, undefined, (err, meal) => {
    if (err) t.end(err)
    t.true(meal)
    t.end()
  })
})

tape('chooseMeal - pass', t => {
  const choice = 'Köfte'
  w2eat.chooseMeal(choice, recipes, (err, result) => {
    if (err) t.end(err)
    t.true(result.title === choice)
    t.end()
  })
})

tape('chooseMeal - fail pt1 - no match', t => {
  w2eat.chooseMeal('choice', recipes, (err, result) => {
    if (err) t.end(err)
    t.true(result, [])
    t.end()
  })
})

// tape('chooseMeal - fail pt2 - not a string', t => {
//   w2eat.chooseMeal(0, recipes, (err, result) => {
//     t.end(err)
//   })
// })
//
// tape('chooseMeal - fail pt2 - not a string', t => {
//   w2eatApiCall(url, (err, meals) => {
//   if (err) t.end(err)
//     chooseMeal(0, meals, (err, result) => {
//       t.end(err)
//     })
//   })
// })


tape('getAvailableMeals - pass', t => {
  w2eat.getAvailableMeals(recipes, (err, result) => {
    if (err) t.end(err)
    t.true(result)
    t.end()
  })
})
