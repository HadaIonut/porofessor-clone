<script>
  import Button from "./Button.svelte";
  import RegionRadioButton from "./RegionRadioButton.svelte";

  let inputValue = '';
  let regionSelected = '';

  const handleInput = (event) => {
    inputValue = event.target.value
  }

  const handleClick = () => {

  }
</script>

<div class="summoner-input">
  <div class="input-container">
    <input on:change={handleInput} class="primary-name-input" type="text">
    <Button on:click={handleClick} text="Search"/>
  </div>
  <RegionRadioButton bind:regionSelected={regionSelected}/>
</div>

<style>
    .input-container {
        width: 50vw;
        height: 5vh;
        display: flex;
    }

    .primary-name-input {
        width: 79%;
        font-size: 24px;
    }
</style>