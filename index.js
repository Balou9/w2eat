// TO DO:
// Fix test
// looking for an api

const http = require('http')

function w2eatApiCall (url, cb) {
  http.get(url, (res) => {
    const { statusCode } = res
    const contentType = res.headers['content-type']
    if (res.statusCode !== 200) {
      throw new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
    } else if (!/^text\/javascript/.test(contentType)) {
      throw new Error('Invalid content-type.\n' +
      `Expected text/javascript but recieved ${contentType}`)
    }
    res.setEncoding('utf8')
    let data = ''
    res.on('data', (chunk) => { data += chunk })
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(data)
        cb(null, parsedData)
      } catch (e) {
        console.error(e.message)
      }
    })
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`)
  })
}

module.exports = w2eatApiCall
