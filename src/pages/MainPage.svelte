<script>
import RegionRadioButton from "../components/RegionRadioButton.svelte";
</script>

<div class="page-container">
    <div class="summoner-input">
        <div class="input-container">
            <input class="primary-name-input" type="text">
            <button class="primary-search-button"></button>
        </div>
        <RegionRadioButton/>
    </div>

</div>

<style lang="scss">
  .input-container {
    width: 80vw;
    height: 5vh;
    display: flex;
  }

  .primary-name-input {
    width: 79%;
    font-size: 24px;
  }

  .primary-search-button {
    width: 20%;
    height: 100%;
    margin-left: 5px;
  }

  .page-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>