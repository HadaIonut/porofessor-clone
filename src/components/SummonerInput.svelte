<script>
  import Button from "./Button.svelte";
  import RegionRadioButton from "./RegionRadioButton.svelte";
  import axios from "axios";
  import {navigate} from "svelte-navigator";

  let inputValue = '';
  let regionSelected = 'EUNE';

  const handleInput = (event) => {
    inputValue = event.target.value
  }

  const handleClick = () => navigate(`/${regionSelected}/${inputValue}`);

</script>

<div class="summoner-input">
  <div class="input-container">
    <input on:change={handleInput} class="primary-name-input" type="text">
    <Button on:click={handleClick} text="Search"/>
  </div>
  <RegionRadioButton bind:regionSelected={regionSelected}/>
</div>

<style lang="scss">
  .input-container {
    width: 50vw;
    height: 5vh;
    display: flex;
  }

  .primary-name-input {
    width: 79%;
    font-size: 24px;
    background: #40444b;
    border: none;
    color: white;
    padding: 10px;

    &:focus {
      outline-width: 0;
    }
  }
</style>