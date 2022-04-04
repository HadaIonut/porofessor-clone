<script>
  import Card from "./Card.svelte";
  import {findChampionFromId, findUrlForImage} from "../pictureUtils.js";

  export let game;
</script>

<Card className="featured-game">
  <span slot="header">
    {game.gameMode}
  </span>
  <div class="body-container" slot="body">
    <div class="featured-game-grid">
      {#if game.participants}
        {#each game.participants as participant, index}
          <div class="player-row {index < 5 ? 'reverse-row' : ''}">
            <img src="{findUrlForImage('champion',findChampionFromId(participant.championId).image)}"
                 alt="{findChampionFromId(participant.championId).name}"
                 class="character-image">
            <div class="player-name">{participant.summonerName}</div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</Card>

<style lang="scss">
  :global(.featured-game) {
    background: #3a3f44;
    height: 20rem;
    color: white;
    text-align: center;
    font-size: 14px;
    width: 100%;
  }

  .game-mode {
    background: #2a2c31;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: #2387a9 solid 2px;
    font-size: 18px;
  }

  .player-row {
    height: 100%;
    width: 100%;
  }

  .featured-game-grid {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: 5px 15px;
  }

  .character-image {
    width: 40px;
    height: 40px;
  }

  .player-row {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .reverse-row {
    flex-direction: row-reverse;
  }

  .body-container {
    height: 100%;
  }
</style>