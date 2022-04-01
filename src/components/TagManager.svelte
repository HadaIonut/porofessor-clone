<script>
  import rankedData from "../storeModules/rankedData.js";
  import PlayerTag from "./PlayerTag.svelte";

  export let participant;

  let participantData;
  rankedData.subscribe((value) => {
    participantData = value?.[participant?.summonerId];
  })
</script>

<div class="tag-container">
  {#if participantData?.[0]}

    {#if participantData[0].winRate > 70}
      <PlayerTag type="good" content="good win-rate" description="This player has above 70% win-rate"/>
    {:else if participantData[0].winRate < 40}
      <PlayerTag type="bad" content="bad win-rate" description="This player has bellow 40% win-rate"/>
    {/if}

    {#if participantData[0].tags.freshBlood}
      <PlayerTag type="neutral" content="fresh blood" description="This player is new"/>
    {/if}

    {#if participantData[0].tags.hotStreak}
      <PlayerTag type="good" content="hot streak" description="This player has a good win streak"/>
    {/if}

    {#if participantData[0].tags.inactive}
      <PlayerTag type="bad" content="inactive" description="This player has been inactive for a while"/>
    {/if}

    {#if participantData[0].tags.veteran}
      <PlayerTag type="good" content="veteran" description="This player has played for a while"/>
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