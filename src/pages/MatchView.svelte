<script>
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";
  import PlayerCard from "../components/PlayerCard.svelte";
  import SearchError from "../components/SearchError.svelte";

  export let region;
  export let username;
  let matchData;
  let blueTeam;
  let redTeam;
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
    blueTeam = matchData?.data?.participants?.slice(0, 5)
    redTeam = matchData?.data?.participants?.slice(5, 10)
    handleErrors()
  })

</script>
{#if (!isError)}
  <div class="player-cards-container">
    {#if (matchData?.data)}
      <div class="player-cards-row">
        {#each blueTeam as participant}
          <PlayerCard participant={participant} region={region}/>
        {/each}
      </div>
      <div class="player-cards-row">
        {#each redTeam as participant}
          <PlayerCard participant={participant} region={region}/>
        {/each}
      </div>
    {/if}
  </div>
{:else }
  <SearchError errorType={errorType}/>
{/if}

<style lang="scss">
  .player-cards-container {
    min-width: 1080px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .player-cards-row {
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
