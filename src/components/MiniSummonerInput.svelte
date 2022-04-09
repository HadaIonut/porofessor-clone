<script>
  import {genericMessages} from "../constants/text-lists.js";
  import Dropdown from "./Dropdown.svelte";

  let searchValue;
</script>

<div class="search-container">
  <input type="text"
         class="mini-summoner-search"
         placeholder={genericMessages.summonerInputPlaceholder}
        bind:value={searchValue}>

  <Dropdown>
    <div slot="dropdown-button">caca</div>
    <div slot="options">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </Dropdown>
</div>

<style lang="scss">
  @import "src/mixins/colors";

  .search-container {
    width: 20rem;
    height: 2.5rem;
    position: relative;
  }
  .mini-summoner-search {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    font-size: 16px;
    background: $dark-gray;
    border: none;
    color: $white;
    padding: 10px;

  }
</style>