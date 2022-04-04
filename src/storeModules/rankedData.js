import {writable} from "svelte/store";
import {capitalize, getDataFromAPI} from "../utils.js";

const computeWinRate = (data) => {
  const games = data.wins + data.losses;
  return Math.round(data.wins / games * 100);
}

const formatRankedData = (data) => {
  data = data.reduce((acc, cur) => {
    if (cur.queueType.includes('TFT')) return acc;
    return [...acc, cur];
  }, [])
  if (data.length === 0) {
    return [{
      name: 'Unranked',
      winRate: 0,
      rank: "0",
      image: "Emblem_Unranked.png",
      wins: 0,
      looses: 0,
      lp: 0,
      tags: {
        freshBlood: false,
        hotStreak: false,
        inactive: false,
        veteran: false
      }
    }]
  } else return data.reduce((acc, cur) => {
      return [...acc, {
        name: capitalize(cur.tier),
        winRate: computeWinRate(cur),
        rank: cur.rank,
        image: `Emblem_${capitalize(cur.tier)}.png`,
        wins: cur.wins,
        losses: cur.losses,
        lp: cur.leaguePoints,
        tags: {
          freshBlood: cur.freshBlood,
          hotStreak: cur.hotStreak,
          inactive: cur.inactive,
          veteran: cur.veteran
        }
      }]
    }
    , [])
}


const createRankedDataStore = () => {
  const {subscribe, set, update} = writable({});

  return {
    subscribe,
    update,
    clear: () => set({}),
    populate: async (summonerId, region) => {
      const rawData = await getDataFromAPI("ranked/:summonerId/:region", {summonerId, region});
      return update((prev) => ({
        ...prev,
        [summonerId]: formatRankedData(rawData.data)
      }));
    },
  }
}

let rankedData;
export default rankedData = createRankedDataStore();