<script>
  import SummonerInput from "../components/SummonerInput.svelte";
  import {onMount} from "svelte";
  import featuredGames from "../storeModules/featuredGames.js";
  import FeaturedGames from "../components/FeaturedGames.svelte";
  import notifications from "../storeModules/notifications.js";

  onMount(async () => {
    await featuredGames.populate()

    if ($featuredGames[0].status_code >= 400) {
      notifications.addNotification({type: 'error',message: 'Something went wrong with the API'});
      featuredGames.clear()
    }
  })
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