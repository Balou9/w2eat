const tape = require('tape')
const w2eatApiCall = require('./index.js')
const catchMeal = require('./catchmeal.js')
const url = 'http://www.recipepuppy.com/api/'
const false_url = 'http://www.recipepuppy.com/api/adada'

tape('w2eat - pass', t => {
  w2eatApiCall(url, function (err, data) {
    if (err) t.end(err)
    t.true(data)
    t.end()
  })
})

// tape('w2eat fail', t => {
//   w2eatApiCall(false_url, function (err, data) {
//     if (err) t.end(err)
//     t.end()
//   })
// })

tape('chatchMeal - pass', t => {
  w2eatApiCall(url, function (err, data) {
    if (err) t.end(err)
    t.true(catchMeal(data))
    t.end()
  })
})

// Pending
// 1. Fail w2eat with false_url to get type error see usage.js
