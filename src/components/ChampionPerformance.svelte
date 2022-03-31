<script>
  import champions from "../constants/league-constants/champions";
  import summonerSpells from "../constants/league-constants/summonerSpells.js";
  import runes from "../constants/league-constants/runes.js";
  import backendUrl from "../constants/backendUrl.js";

  export let participant;

  const findChampionFromId = () => champions.find((champion) => Number(champion.id) === participant.championId);
  const findSpellFromId = (spellId) => summonerSpells.find((spell) => Number(spell.id) === spellId);
  const findPerkFromId = (perkId) => runes.find((rune) => Number(rune.id) === perkId);
  const findUrlForImage = (type, imageName) => {
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
</script>

<div class="container">
  <div class="image-container">
    <img src="{findUrlForImage('champion',findChampionFromId().image)}"
         alt="{findChampionFromId().name}">

    <div class="spells-container">
      <img src="{findUrlForImage('rune',findPerkFromId(participant.perks.perkStyle).image)}"
           alt="{findPerkFromId(participant.perks.perkStyle).name}">
      <img src="{findUrlForImage('spell',findSpellFromId(participant.spell1Id).image)}"
           alt="{findSpellFromId(participant.spell1Id).name}">
      <img src="{findUrlForImage('spell',findSpellFromId(participant.spell2Id).image)}"
           alt="{findSpellFromId(participant.spell2Id).name}">
    </div>
  </div>
  <div class="stats-container">
    Tis very hard to compute with my limited API rights :(
  </div>
</div>

<style lang="scss">
  .container {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .image-container {
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;

    > :first-child {
      width: 48px;
      height: 48px;
    }

    > .spells-container {
      height: 16px;
      display: flex;

      > * {
        width: 16px;
        height: 16px;
      }
    }
  }

  .stats-container {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>