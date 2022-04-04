<script>
  import {onMount} from "svelte";
  import {capitalize, getDataFromAPI} from "../utils.js";
  import backendUrl from "../constants/backendUrl.js";
  import rankedData from "../storeModules/rankedData.js";

  export let summonerId;
  export let region;

  onMount(async () => {
    await rankedData.populate(summonerId, region);
  })
</script>

<div class="rank-container">
  {#if ($rankedData?.[summonerId])}
    <div class="image-container">
      <img src="{`${backendUrl}/static/rankEmblems/${$rankedData[summonerId][0].image}`}"
           alt='{$rankedData[summonerId][0].name}'>
    </div>
    <div class="details-container">
      <span class="division">{$rankedData[summonerId][0].name} {$rankedData[summonerId][0].rank}
        <span class="secondary-text">
          {$rankedData[summonerId][0].lp} lp
        </span>
      </span>
      <span>
        <span class="{$rankedData[summonerId][0].winRate >= 50 ? 'positive-win-rate' : 'negative-win-rate'}">
          {$rankedData[summonerId][0].winRate}%
        </span>
        win
        <span class="secondary-text">
          ({($rankedData[summonerId][0].losses + $rankedData[summonerId][0].wins) || 0} played)
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

  .secondary-text {
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

  .negative-win-rate {
    color: red;
  }

  .positive-win-rate {
    color: greenyellow;
  }
</style>