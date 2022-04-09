<script>
  import {findChampionFromId, findUrlForImage} from "../pictureUtils.js";

  export let banList;

  let blueBans, redBans;
  if (banList) {
    banList = banList.filter((ban) => ban.championId !== -1)

    blueBans = banList?.slice(0, 5);
    redBans = banList?.slice(5, 10);
  }

  console.log(banList)
</script>

{#if banList?.length > 0}
  <div class="bans-container">
    <div class="bans-text"> Bans: </div>
    <div class="blue-bans-container">
      {#each blueBans as ban}
        <img class="ban-image" src="{findUrlForImage('champion',findChampionFromId(ban.championId)?.image)}"
             alt="{findChampionFromId(ban.championId)?.name}">
      {/each}
    </div>

    <div class="blue-bans-container">
      {#each redBans as ban}
        <img class="ban-image" src="{findUrlForImage('champion',findChampionFromId(ban.championId)?.image)}"
             alt="{findChampionFromId(ban.championId)?.name}">
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  @import "src/mixins/generics";

  .ban-image {
    @include fixed-size(36px)
  }

  .blue-bans-container {
    display: flex;
    gap: 0.2rem;
  }

  .bans-container {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
    padding-right: 30px;
  }

  .bans-text {
    color: white;
  }
</style>
