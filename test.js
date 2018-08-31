const tape = require('tape')
const http = require('http')
const w2eatApiCall = require('./index.js')
const catchMeal = require('./catchmeal.js')
const url = 'http://www.recipepuppy.com/api/'

tape('w2eat - pass', t => {
  w2eatApiCall(url, function (err, data) {
    if (err) t.end(err)
    t.true(data)
    t.end()
  })
})

tape.only('w2eat fail', t => {
  const port = 419

  const requestHandler = (req, res) => {
    res.statusCode = 500
    response.end('Status Error 500')
  }
  const server = http.createServer(requestHandler)

  server.listen(port, (err) => {
    if (err) {
      return err
    }
    console.log(`server is listening on ${port}`)
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
