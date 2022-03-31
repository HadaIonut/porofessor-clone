<script>
  import {onMount} from "svelte";
  import {capitalize, getDataFromAPI} from "../utils.js";
  import backendUrl from "../constants/backendUrl.js";

  export let summonerId;
  export let region;
  let rankedData;

  const computeWinRate = (data) => {
    const games = data.wins + data.losses;
    return Math.round(data.wins / games * 100);
  }

  const formatRankedData = (data) =>
    data.reduce((acc, cur) => {
      return [...acc, {
        name: capitalize(cur.tier),
        winRate: computeWinRate(cur),
        rank: cur.rank,
        image: `Emblem_${capitalize(cur.tier)}.png`,
        wins: cur.wins,
        losses: cur.losses,
        lp: cur.leaguePoints
      }]
    }, [])


  onMount(async () => {
    const rawData = await getDataFromAPI("ranked/:summonerId/:region", {summonerId, region});
    rankedData = formatRankedData(rawData.data);
  })
</script>

<div class="rank-container">
  {#if (rankedData)}
    <div class="image-container">
      <img src="{`${backendUrl}/static/rankEmblems/${rankedData[0].image}`}" alt='{rankedData[0].name}'>
    </div>
    <div class="details-container">
      <span class="division">{rankedData[0].name} {rankedData[0].rank}
        <span class="lp-container">
          {rankedData[0].lp} lp
        </span>
      </span>
      <span>
        {rankedData[0].winRate}% win
        <span class="lp-container">
          ({rankedData[0].losses + rankedData[0].wins} played)
        </span>
      </span>

    </div>
  {/if}
</div>

<style lang="scss">
  .rank-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .division {
    justify-content: center;
  }

  .lp-container {
    color: #ababab;
  }

  .details-container {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    > * {
      padding-bottom: 5px;
    }
  }

  .image-container {
    width: 40%;
    height: 80%;
    padding: 10px;

    > * {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>