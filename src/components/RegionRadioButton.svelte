<script>
  import {regionList} from "../constants/regions.js";

  let localRegionList = regionList;

  const selectRegion = (event) => {
    const target = event.currentTarget.id;
    localRegionList = regionList.reduce((acc, cur) => [...acc, {...cur, selected: false}], [])
    const regionIndex = localRegionList.findIndex((region) => region.regionName === target);
    localRegionList[regionIndex].selected = true;
  }
</script>

<div class="region-select">
  {#each localRegionList as region}
    <div on:click={selectRegion} id="{region.regionName}"
         class="region-radio-button {region.selected ? 'selected' : ''}">
      <input checked="{region.selected ? 'checked' : ''}" class="hidden"
             id="{region.regionName.toLowerCase()}" type="radio" value="{region.regionName}"
             name="region">
      <label for="{region.regionName.toLowerCase()}">{region.regionName}</label>
    </div>
  {/each}
</div>

<style lang="scss">
  .region-select {
    display: flex;
    justify-content: space-evenly;
    margin-top: 0.5rem;
  }

  .hidden {
    display: none;
  }

  .region-radio-button {
    background: #2387a9;
    color: white;
    padding: 0.4rem;
    transition: background 0.4s ease;

    &.selected {
      background: #13495B;
    }
  }
</style>