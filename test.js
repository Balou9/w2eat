const tape = require('tape')
const http = require('http')
const w2eatApiCall = require('./index.js')
const {
  catchMeal,
  chooseMeal,
  getAvailableMeals
} = require('./lib/handlers.js')

const url = 'http://www.recipepuppy.com/api/'

tape('w2eat - pass', t => {
  w2eatApiCall(url, (err, data) => {
    if (err) t.end(err)
    t.true(data)
    t.end()
  })
})

tape('w2eat fail', t => {
  const server = http.createServer((req, res) => {
    res.statusCode = 500
    res.end()
  })

  server.listen(41900, () => {
    w2eatApiCall('http://localhost:41900', (err, data) => {
      if (!err) t.end(Error('no error in cb'))
      t.equal(err.message, '500 Request Failed.')
      server.close()
      t.end()
    })
  })
})

tape('chatchMeal - title - pass', t => {
  w2eatApiCall(url, (err, data) => {
    if (err) t.end(err)
    catchMeal(data, undefined, (err, meal) => {
      if (err) t.end(err)
      t.true(meal)
      t.end()
    })
  })
})

tape('chatchMeal - recipe - pass', t => {
  w2eatApiCall(url, (err, data) => {
    if (err) t.end(err)
    catchMeal(data, true, (err, meal) => {
      if (err) t.end(err)
      t.true(meal)
      t.end()
    })
  })
})

tape('chooseMeal - pass', t => {
  w2eatApiCall(url, (err, meals) => {
    if (err) t.end(err)
    chooseMeal('Chocolate-Cherry Thumbprints', meals, (err, result) => {
      if (err) t.end(err)
      t.true(result)
      t.end()
    })
  })
})

tape('getAvailableMeals - pass', t => {
  w2eatApiCall(url, (err, meals) => {
    if (err) t.end(err)
    getAvailableMeals(meals, (err, result) => {
      if (err) t.end(err)
      t.true(result)
      t.end()
    })
  })
})
