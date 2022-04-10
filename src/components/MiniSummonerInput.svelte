<script>
  import {genericMessages} from "../constants/text-lists.js";
  import Dropdown from "./Dropdown.svelte";
  import {regionList} from "../constants/regions.js";
  import {navigate} from "svelte-navigator";

  let searchValue;
  let regions = regionList;
  let selectedRegion = 'EUNE';

  const handleRegionSelect = (regionName) => {
    selectedRegion = regionName
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') navigate(`/match/${selectedRegion}/${searchValue}`);
  }
</script>

<div class="search-container">
  <input type="text"
         class="mini-summoner-search"
         placeholder={genericMessages.summonerInputPlaceholder}
        bind:value={searchValue}
        on:keypress={handleKeyPress}>
  <div class="dropdown-container">
    <Dropdown>
      <div slot="dropdown-button">{selectedRegion}</div>
      <div slot="options">
        {#each regions as region}
          <div on:click={() => handleRegionSelect(region.regionName)}> {region.regionName} </div>
        {/each}
      </div>
    </Dropdown>
  </div>
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

  .dropdown-container {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>