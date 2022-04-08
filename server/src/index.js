const express = require('express')
const cors = require('cors')
const app = express()
const fetch = require('node-fetch');
const path = require("path");

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
let devKey = "RGAPI-cd8803ce-889b-48c7-af06-023713dcc3da";

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

app.get('/ranked/:summonerId/:region', async (req, res) => {
  const rankedData = await requestToRiotAPI(`https://${regionToUrlMap[req.params.region]}/lol/league/v4/entries/by-summoner/${req.params.summonerId}`);

  res.send(rankedData);
})

app.get('/featured', async (req, res) => {
  const featuredGamesEUW = await requestToRiotAPI(`https://${regionToUrlMap['EUW']}/lol/spectator/v4/featured-games`)
  const featuredGamesNA = await requestToRiotAPI(`https://${regionToUrlMap['NA']}/lol/spectator/v4/featured-games`)

  res.send([...featuredGamesEUW.gameList, ...featuredGamesNA.gameList]);
})

app.use('/static', express.static(path.join(__dirname, '../assets')))

app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})
