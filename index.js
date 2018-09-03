// TO DO:
// looking for an api

const http = require('http')

const debug = require('debug')('w2eat')

function w2eatApiCall (url, cb) {
  http.get(url, res => {
    if (res.statusCode !== 200)
      return cb(new Error(`${res.statusCode} Request Failed.`))

    res.on('error', cb)

    var accu = Buffer.alloc(0)
    res.on('data', chunk => { accu = Buffer.concat([ accu, chunk ]) })

    res.on('end', () => {
      try {
         debug('calling back')
        cb(null, JSON.parse(accu))
      } catch (err) {
        return cb(err)
      }
    })

  }).on('error', cb)
}

module.exports = w2eatApiCall
