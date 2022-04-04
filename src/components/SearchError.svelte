<script>
  import backendUrl from "../constants/backendUrl.js";
  import Error from "./Error.svelte";

  export let errorType;
</script>

<div class="error-container">
  {#if (errorType === 'not-found')}
    <Error
        imageURL="{backendUrl}/static/errorPictures/tired-poro.png"
        altImg="Just a hurt poro :("
        primaryText="The specific user you searched for was not found."
        secondaryText="Your either miss-typed their name or they are not in a game"/>
  {:else if (errorType === 'unauth' || errorType === 'bad-key')}
    <Error
        imageURL="{backendUrl}/static/errorPictures/bad-dev-key.png"
        altImg="Adventure poro :)"
        primaryText="Something is wrong with your dev key"
        secondaryText="Your dev key is either expired or wrong"/>
  {:else }
    <Error
        imageURL="{backendUrl}/static/errorPictures/other-error-poro.png"
        altImg="Cute poro"
        primaryText="Who know what could be wrong here"
        secondaryText="No, really, what did you do, I cannot even replicate this"/>
  {/if}

</div>

<style lang="scss">
  @import "src/mixins/generics";

  .error-container {
    height: 60vh;
    @include flex-center();
    flex-direction: column;
  }

  .error-image {
    height: 20rem;
    width: 20rem;
  }

  .primary-error {
    color: white;
    font-size: 24px;
  }

  .secondary-error {
    color: #ababab;
    font-size: 20px;
  }
</style>