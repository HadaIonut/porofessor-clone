<script>
  import RegionRadioButton from "../components/RegionRadioButton.svelte";
  import Button from "../components/Button.svelte";
</script>

<div class="page-container">
  <div class="summoner-input">
    <div class="input-container">
      <input class="primary-name-input" type="text">
      <Button text="Search"/>
    </div>
    <RegionRadioButton/>
  </div>

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
  }

  .page-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>