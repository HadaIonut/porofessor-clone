<script>
  import Card from "./Card.svelte";
  import {findChampionFromId, findUrlForImage} from "../pictureUtils.js";
  import {navigate} from "svelte-navigator";

  export let game;
  export let gameIndex;

  const headerOnClick = () => {
    let route = 'match/';

    if (gameIndex < 4) route += 'EUW/';
    else route += 'NA/';

    route += game.participants[0].summonerName;
    navigate(route);
  }
</script>

<Card className="featured-game" hoverableTitle={true} headerOnClick={headerOnClick}>
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
            <div class="player-name"
                 on:click={navigate(`/user/${participant.summonerName}`)}>
              {participant.summonerName}
            </div>
          </div>

        {/each}
      {/if}
    </div>
  </div>
</Card>

<style lang="scss">
  @import "src/mixins/generics";
  @import "src/mixins/colors";

  :global(.featured-game) {
    background: #3a3f44;
    height: 20rem;
    color: white;
    text-align: center;
    font-size: 14px;
    width: 100%;
  }

  .player-row {
    @include fullSize();
  }

  .featured-game-grid {
    @include fullSize();

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    grid-gap: 1px 15px;
  }

  .character-image {
    @include fixed-size(40px);
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

  .player-name {
    @include hoverable($white, 0.1em);
  }
</style>