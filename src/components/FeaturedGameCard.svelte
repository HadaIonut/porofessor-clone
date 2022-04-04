<script>
  import Card from "./Card.svelte";
  import {findChampionFromId, findUrlForImage} from "../pictureUtils.js";

  export let game;
</script>

<Card className="featured-game">
  <span slot="header">
    {game.gameMode}
  </span>
  <div slot="body">
    {#if game.participants}
      {#each game.participants as participant}
        <img src="{findUrlForImage('champion',findChampionFromId(participant.championId).image)}"
        alt="{findChampionFromId(participant.championId).name}">
        {JSON.stringify(participant.summonerName)}
      {/each}
    {/if}
  </div>
</Card>

<style lang="scss">
  :global(.featured-game) {
    background: #3a3f44;
    height: 25rem;
    color: white;
    text-align: center;
  }

  .game-mode {
    background: #2a2c31;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: #2387a9 solid 2px;
    font-size: 18px;
  }
</style>