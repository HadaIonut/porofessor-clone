<script>

  let optionsVisibility = false;

  const dropdownOnClick = () => optionsVisibility = !optionsVisibility;
  const windowOnClick = () => optionsVisibility = false;
  const stopEvents = (event) => event.stopPropagation();

</script>

<svelte:window on:click={windowOnClick}/>

<div class="wrapper">
  <div class="dropdown-button-container" on:click={dropdownOnClick} on:click={stopEvents}>
    <slot name="dropdown-button"/>
  </div>

  {#if optionsVisibility}
    <div class="dropdown-options-container">
      <slot name="options"/>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "src/mixins/colors";
  @import "src/mixins/generics";

  .wrapper {
    position: relative;
  }

  .dropdown-options-container {
    position: absolute;
    background-color: $light-gray;
    color: white;
    min-width: 50px;
    overflow: auto;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0;
    cursor: pointer;
  }

  :global([slot = "options"]) {
    :global(> *) {
      padding-left: 5px;
      padding-bottom: 5px;

      &:first-child {
        padding-top: 5px;
      }
      &:hover {
        background-color: $darker-gray;
      }
    }
  }

  .dropdown-button-container {
    color: lightgrey;
    cursor: pointer;
    padding: 10px;
    width: 40px;
  }

  .option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

</style>