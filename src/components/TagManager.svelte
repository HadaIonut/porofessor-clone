<script>
  import rankedData from "../storeModules/rankedData.js";
  import PlayerTag from "./PlayerTag.svelte";
  import {playerTags} from "../constants/text-lists.js";

  export let participant;

  let participantData;
  rankedData.subscribe((value) => {
    participantData = value?.[participant?.summonerId];
  })
</script>

<div class="tag-container">
  {#if participantData?.[0]}

    {#if participantData[0].winRate > 70}
      <PlayerTag {...playerTags.goodWins}/>
    {:else if participantData[0].winRate < 40}
      <PlayerTag {...playerTags.badWins}/>
    {/if}

    {#if participantData[0].tags.freshBlood}
      <PlayerTag {...playerTags.newPlayer}/>
    {/if}

    {#if participantData[0].tags.hotStreak}
      <PlayerTag {...playerTags.winStreak}/>
    {/if}

    {#if participantData[0].tags.inactive}
      <PlayerTag {...playerTags.inactive}/>
    {/if}

    {#if participantData[0].tags.veteran}
      <PlayerTag {...playerTags.veteran}/>
    {/if}
  {/if}
</div>

<style lang="scss">
  .tag-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;

    :global(& :first-child:nth-last-child(1)) {
      grid-column: auto / span 2;
    }

    :global(& :first-child:nth-last-child(3):last-child),
    :global(& :first-child:nth-last-child(3) ~ :last-child) {
      grid-column: auto / span 2;
    }
  }
</style>