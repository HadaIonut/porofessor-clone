<script>
  import champions from "../constants/league-constants/champions";
  import summonerSpells from "../constants/league-constants/summonerSpells.js";
  import runes from "../constants/league-constants/runes.js";
  import backendUrl from "../constants/backendUrl.js";
  import {findChampionFromId, findPerkFromId, findSpellFromId, findUrlForImage} from "../pictureUtils.js";

  export let participant;
</script>

<div class="container">
  <div class="image-container">
    <img src="{findUrlForImage('champion',findChampionFromId(participant.championId).image)}"
         alt="{findChampionFromId(participant.championId).name}">

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
  @import "src/mixins/generics";

  .container {
    @include fullSize();
    display: flex;
  }

  .image-container {
    @include flex-center();

    height: 100%;
    width: 25%;
    flex-direction: column;
    margin-left: 5px;
    margin-right: 5px;

    > :first-child {
      @include fixed-size(48px)
    }

    > .spells-container {
      height: 16px;
      display: flex;

      > * {
        @include fixed-size(16px)
      }
    }
  }

  .stats-container {
    @include flex-center();

    width: 100%;
    text-align: center;
  }
</style>