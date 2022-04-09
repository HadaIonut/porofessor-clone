<script>

import MiniSummonerInput from "./MiniSummonerInput.svelte";
</script>

<div class="header-container">
  <div class="title-container">Porofessor Clone :D</div>
  <MiniSummonerInput/>
</div>

<style lang="scss">
  @import "src/mixins/colors";

  .title-container {
    Font-family: Copperplate, Copperplate Gothic Light, fantasy;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    color: $white;
  }

  .header-container {
    width: calc(100% - 30px);
    display: flex;
    padding: 10px 15px;
    background-color: $darker-gray;
    justify-content: space-between;
  }
</style>