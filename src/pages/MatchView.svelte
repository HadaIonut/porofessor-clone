<script>
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";
  import PlayerCard from "../components/PlayerCard.svelte";

  export let region;
  export let username;
  let matchData;

  onMount(async () => {
    matchData = await getDataFromAPI("summonerName/:username/region/:region", {username, region})
  })

</script>

<div class="player-cards-container">
  {#if (matchData?.data)}
    {#each matchData?.data?.participants as participant}
      <PlayerCard participant={participant}/>
    {/each}
  {/if}
</div>

<style lang="scss">
  .player-cards-container {
    height: calc(100% - 20px);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 6rem 2rem;
    min-width: 1080px;
    overflow-x: auto;
    overflow-y: hidden;
  }
</style>