import champions from "./constants/league-constants/champions.js";
import summonerSpells from "./constants/league-constants/summonerSpells.js";
import runes from "./constants/league-constants/runes.js";
import backendUrl from "./constants/backendUrl.js";

export const findChampionFromId = (championId) => champions.find((champion) => Number(champion.id) === championId);
export const findSpellFromId = (spellId) => summonerSpells.find((spell) => Number(spell.id) === spellId);
export const findPerkFromId = (perkId) => runes.find((rune) => Number(rune.id) === perkId);
export const findUrlForImage = (type, imageName) => {
  let base = `${backendUrl}/static/`;

  switch (type) {
    case 'champion':
      base += `champions/${imageName}`
      break;
    case 'spell':
      base += `summonerSpells/${imageName}`
      break;
    case 'rune':
      base += `runes/${imageName}`
      break;
  }

  return base;
}