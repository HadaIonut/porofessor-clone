<script>
  import backendUrl from "../constants/backendUrl.js";

  export let errorType;
</script>

<div class="error-container">
  {#if (errorType = 'not-found')}
      <img
          src="{backendUrl}/static/errorPictures/tired-poro.png"
          alt="Just a hurt poro :("
          class="error-image">
      <div class="error-message">
        <div class="primary-error">
          The specific user you searched for was not found.
        </div>
        <div class="secondary-error">
          Your either miss-typed their name or they are not in a game
        </div>
      </div>
  {/if}
</div>

<style lang="scss">
  .error-container {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
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