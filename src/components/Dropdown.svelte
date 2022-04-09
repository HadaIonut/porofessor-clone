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
      <slot class="" name="options"/>
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    position: relative;
  }

  .dropdown-options-container {
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

</style>