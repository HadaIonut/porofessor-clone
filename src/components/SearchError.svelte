<script>
  import backendUrl from "../constants/backendUrl.js";
  import Error from "./Error.svelte";
  import {errorMessages} from "../constants/text-lists.js";

  export let errorType;
</script>

<div class="error-container">
  {#if (errorType === 'not-found')}
    <Error
        imageURL="{backendUrl}/static/errorPictures/tired-poro.png"
        {...errorMessages.notFound}/>
  {:else if (errorType === 'unauth' || errorType === 'bad-key')}
    <Error
        imageURL="{backendUrl}/static/errorPictures/bad-dev-key.png"
        {...errorMessages.badKey}/>
  {:else }
    <Error
        imageURL="{backendUrl}/static/errorPictures/other-error-poro.png"
        {...errorMessages.other}/>
  {/if}

</div>

<style lang="scss">
  @import "src/mixins/generics";
  @import "src/mixins/colors";

  .error-container {
    height: 60vh;
    @include flex-center();
    flex-direction: column;
  }

  .error-image {
    @include fixed-size(20rem);
  }

  .primary-error {
    color: $white;
    font-size: 24px;
  }

  .secondary-error {
    color: $dark-white;
    font-size: 20px;
  }
</style>