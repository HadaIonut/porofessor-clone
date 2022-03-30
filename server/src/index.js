const express = require('express')
const cors = require('cors')
const app = express()
const fetch = require('node-fetch');

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
let devKey = "RGAPI-a036b0d5-e83e-4411-ac6c-7e8856be510b";

const requestToRiotAPI = async (url) => {
  return await fetch(`${url}?api_key=${devKey}`).then(r => r.json()).then(res => res);
}

app.get('/summonerName/:userName/region/:region', async function (req, res) {
  const userData = await requestToRiotAPI(`https://${regionToUrlMap[req.params.region]}/lol/summoner/v4/summoners/by-name/${req.params.userName}`);

  if (!userData.id) {
    res.send(userData);
    return;
  }

  const gameData = await requestToRiotAPI(`https://${regionToUrlMap[req.params.region]}/lol/spectator/v4/active-games/by-summoner/${userData.id}`)

  res.send(gameData);
})

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})