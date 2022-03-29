const express = require('express')
const cors = require('cors')
const app = express()
const request = require('request');

app.use(cors());

let regionToUrlMap = {
  'EUNE': 'eun1.api.riotgames.com',
  'EUW': 'euw1.api.riotgames.com',
  'BR': 'br1.api.riotgames.com',
  'JP': 'jp1.api.riotgames.com',
  'KR':	'kr.api.riotgames.com',
  'LAN': 'la1.api.riotgames.com',
  'LAS':'la2.api.riotgames.com',
  'NA':	'na1.api.riotgames.com',
  'OC':	'oc1.api.riotgames.com',
  'TR':	'tr1.api.riotgames.com',
  'RU':	'ru.api.riotgames.com'
}
let devKey = "RGAPI-9b7f170c-82ac-4c53-a503-062fbe9db2ba";

app.get('/summonerName/:userName/region/:region', function (req, res, next) {
  console.log(req.params.userName)
  console.log(req.params.region)
  console.log(`https://${regionToUrlMap[req.params.region]}/lol/summoner/v4/summoners/by-name/${req.params.userName}?${devKey}`)
  const requestOptions = {
    url: `https://${regionToUrlMap[req.params.region]}/lol/summoner/v4/summoners/by-name/${req.params.userName}?api_key=${devKey}`,
    method: 'GET',
  }
  request(requestOptions, (err, response, body) => {
    if (err) {
      res.send(err)
    } else if (response.statusCode === 200) {
      res.send(body)
    } else {
      res.send(response.statusCode)
    }
  });


})

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})