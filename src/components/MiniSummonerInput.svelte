<script>
  import {genericMessages} from "../constants/text-lists.js";

  let searchValue;
</script>

<div class="search-container">
  <input type="text"
         class="mini-summoner-search"
         placeholder={genericMessages.summonerInputPlaceholder}
        bind:value={searchValue}>
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