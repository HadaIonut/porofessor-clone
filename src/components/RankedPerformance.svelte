<script>
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";
  import backendUrl from "../constants/backendUrl.js";

  export let summonerId;
  export let region;
  let rankedData;

  const computeWinRate = (data) => {
    const games = data.wins + data.looses;
    return games / data.wins * 100;
  }

  const formatRankedData = (data) =>
    data.reduce((acc, cur) => {
      return [...acc, {
        name: cur.tier.toLowerCase(),
        winRate: computeWinRate(cur),
        rank: cur.rank,
        image: `${cur.tier}_${cur.rank}.png`.toLowerCase(),
        wins: cur.wins,
        looses: cur.looses,
        lp: cur.leaguePoints
      }]
    }, [])


  onMount(async () => {
    const rawData = await getDataFromAPI("ranked/:summonerId/:region", {summonerId, region});
    console.log(rawData)
    rankedData = formatRankedData(rawData.data);
  })
</script>

<div class="rank-container">
  {#if (rankedData)}
    {#each rankedData as division}
      <div>
        <img src="{`${backendUrl}/static/rankEmblems/${division.image}`}" alt='{division.name}'>
      </div>
    {/each}
  {/if}
</div>

<style lang="scss">
  .rank-container {
    display: flex;
  }
</style>