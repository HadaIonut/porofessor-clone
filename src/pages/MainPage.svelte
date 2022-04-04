<script>
  import SummonerInput from "../components/SummonerInput.svelte";
  import {onMount} from "svelte";
  import featuredGames from "../storeModules/featuredGames.js";
  import FeaturedGames from "../components/FeaturedGames.svelte";

  onMount(async () => await featuredGames.populate())
</script>

<div class="page-container">
  <SummonerInput/>
  <FeaturedGames/>
</div>

<style lang="scss">
  @import "src/mixins/generics";

  .page-container {
    @include flex-center();

    height: 100%;
    padding-top: 10rem;
    flex-direction: column;
  }
</style>