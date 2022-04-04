<script>
  import Button from "./Button.svelte";
  import RegionRadioButton from "./RegionRadioButton.svelte";

  import {navigate} from "svelte-navigator";

  let inputValue = '';
  let regionSelected = 'EUNE';

  const handleNavigation = () => navigate(`/${regionSelected}/${inputValue}`);

  const handleKeyboard = (event) => {
    if (event.code === 'Enter') handleNavigation();
  }

</script>

<div class="summoner-input">
  <div class="input-container">
    <input bind:value={inputValue}
           on:keypress={handleKeyboard}
           placeholder="Insert someone's summoner name"
           class="primary-name-input"
           type="text" >
    <Button on:click={handleNavigation} text="Search"/>
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