<script>
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";
  import PlayerCard from "../components/PlayerCard.svelte";
  import SearchError from "../components/SearchError.svelte";

  export let region;
  export let username;
  let matchData;
  let isError = false;
  let errorType;

  const handleErrors = () => {
    const statusCode = matchData?.data?.status?.status_code;
    switch (statusCode) {
      case 404:
        isError = true;
        errorType = 'not-found';
        return;
      case 401:
        isError = true;
        errorType = 'unauth'
        return;
      case 403:
        isError = true;
        errorType = 'bad-key'
        return;
      default:
        if (statusCode >= 400) {
          isError = true;
          errorType = 'unknown';
        }
    }
  }

  onMount(async () => {
    matchData = await getDataFromAPI("summonerName/:username/region/:region", {username, region});
    handleErrors()
  })

</script>
{#if (!isError)}
  <div class="player-cards-container">
    {#if (matchData?.data)}
      {#each matchData?.data?.participants as participant}
        <PlayerCard participant={participant} region={region}/>
      {/each}
    {/if}
  </div>
{:else }
  <SearchError errorType={errorType}/>
{/if}

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