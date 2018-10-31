// src object as stream
// object mode requires an in between stream ?
// won't work see readable docs

const { Readable } = require('stream')

const srcrs = Readable( {objectMode: true}, function(chunk, _, cb) {
  this.push(chunk)
  cb()
})


srcrs.on('data', function (data) {
  console.log(data)
})

srcrs.on('end', function () {
  console.log('No chunk left')
})

// srcrs.pipe(process.stdout)
