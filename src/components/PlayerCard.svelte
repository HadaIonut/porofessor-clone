<script>
  import ChampionPerformance from "./ChampionPerformance.svelte";
  import RankedPerformance from "./RankedPerformance.svelte";
  import TagManager from "./TagManager.svelte";
  import Card from "./Card.svelte";
  import {navigate} from "svelte-navigator";

  export let participant;
  export let region;

  const viewPlayer = () => {
    navigate(`/user/${participant.summonerName}`)
  }

</script>

<Card className="ranked-player-card" hoverableTitle={true} headerOnClick={viewPlayer}>
  <span slot="header">
    {participant.summonerName}
  </span>
  <div class="body-container" slot="body">
    <div class="section">
      <ChampionPerformance participant={participant}/>
    </div>
    <div class="section">
      <RankedPerformance region={region} summonerId={participant.summonerId}/>
    </div>
    <div class="section">
      <TagManager participant={participant}/>
    </div>
  </div>
</Card>

<style lang="scss">
  @import "src/mixins/colors";

  :global(.ranked-player-card) {
    text-align: center;
    color: $white;
    height: 380px;
    margin: 10px;
  }

  .body-container {
    height: 100%;
  }

  .section {
    height: calc(100% / 3);
    background: $light-gray;

    &:not(:last-child) {
      border-bottom: $black 1px solid;
    }
  }

</style>
