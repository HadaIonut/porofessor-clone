<script>
  export let className;
</script>

<div class="card {className}">
  <div class="card-header">
    <slot name="header"></slot>
  </div>
  <div class="card-body">
    <slot name="body"></slot>
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

  .card-body {
    height: calc(100% - 10px - 2px - 18px);
  }
</style>