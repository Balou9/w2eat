const tape = require('tape')
const http = require('http')
const w2eatApiCall = require('./index.js')
const catchMeal = require('./catchmeal.js')
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

tape('chatchMeal - pass', t => {
  w2eatApiCall(url, function (err, data) {
    if (err) t.end(err)
    t.true(catchMeal(data))
    t.end()
  })
})

// Pending
// 1. Fail w2eat with false_url to get type error see usage.js
