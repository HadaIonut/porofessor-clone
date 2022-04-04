<script>
import featuredGames from "../storeModules/featuredGames.js";
import FeaturedGameCard from "./FeaturedGameCard.svelte";
</script>

<div class="featured-games">
  <div class="title">Featured Games</div>
  <div class="cards-container">
    {#each $featuredGames as game}
      <FeaturedGameCard game={game}/>
    {/each}
  </div>
</div>


<style lang="scss">
  .cards-container {
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .title {
    padding-top: 1rem;
    text-align: center;
    padding-bottom: 1rem;
    color: white;
    font-size: 24px;
  }
</style>
