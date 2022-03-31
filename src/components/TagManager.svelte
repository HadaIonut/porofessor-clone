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
      <PlayerTag type="good" content="good win-rate" description="caca"/>
    {:else if participantData[0].winRate < 40}
      <PlayerTag type="bad" content="bad win-rate" description="caca"/>
    {/if}

    {#if participantData[0].tags.freshBlood}
      <PlayerTag type="neutral" content="fresh blood" description="caca"/>
    {/if}

    {#if participantData[0].tags.hotStreak}
      <PlayerTag type="good" content="hot streak" description="caca"/>
    {/if}

    {#if participantData[0].tags.inactive}
      <PlayerTag type="bad" content="inactive" description="caca"/>
    {/if}

    {#if participantData[0].tags.veteran}
      <PlayerTag type="good" content="veteran" description="caca"/>
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
  }
</style>