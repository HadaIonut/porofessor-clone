var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/summonerName/:userName', function (req, res, next) {
  console.log(req.params.userName)
})

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})