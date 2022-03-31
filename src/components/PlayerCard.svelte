<script>
  export let participant;
</script>

<div class="card">
  <div class="card-header">
    {participant.summonerName}
  </div>
  <div class="section">
    abcd
  </div>
  <div class="section">
    abcd
  </div>
  <div class="section">
    abcd
  </div>
</div>

<style lang="scss">
  .card {
    text-align: center;
    color: white;
  }

  .card-header {
    background: #2a2c31;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: #2387a9 solid 2px;
    font-size: 18px;
  }

  .section {
    height: calc((100% - 10px - 18px) / 3);
    background: #3a3f44;

    &:not(:last-child) {
      border-bottom: black 1px solid;
    }
  }
</style>