<script>
  import Button from "./Button.svelte";
  import RegionRadioButton from "./RegionRadioButton.svelte";

  import {navigate} from "svelte-navigator";
  import {genericMessages} from "../constants/text-lists.js";

  let inputValue = '';
  let regionSelected = 'EUNE';

  const handleNavigation = () => navigate(`match/${regionSelected}/${inputValue}`);

  const handleKeyboard = (event) => {
    if (event.code === 'Enter') handleNavigation();
  }

</script>

<div class="summoner-input">
  <div class="input-container">
    <input bind:value={inputValue}
           on:keypress={handleKeyboard}
           placeholder={genericMessages.summonerInputPlaceholder}
           class="primary-name-input"
           type="text" >
    <Button on:click={handleNavigation} text={genericMessages.search}/>
  </div>
  <RegionRadioButton bind:regionSelected={regionSelected}/>
</div>

<style lang="scss">
  @import "src/mixins/colors";

  .input-container {
    width: 50vw;
    height: 5vh;
    display: flex;
  }

  .primary-name-input {
    width: 79%;
    font-size: 24px;
    background: $dark-gray;
    border: none;
    color: $white;
    padding: 10px;

    &:focus {
      outline-width: 0;
    }
  }
</style>