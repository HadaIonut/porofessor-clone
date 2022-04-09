<script>
  export let className = '';
  export let hoverableTitle = false;
  export let headerOnClick = function () {
  };
</script>

<div class="card {className}">
  <div class="card-header {hoverableTitle ? 'hover' : ''}" on:click={headerOnClick}>
    <slot name="header"></slot>
  </div>
  <div class="card-body">
    <slot name="body"></slot>
  </div>
</div>

<style lang="scss">
  @import "src/mixins/generics";
  @import "src/mixins/colors";

  .card {
    text-align: center;
    color: white;
  }

  .card-header {
    background: $darker-gray;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: #2387a9 solid 2px;
    font-size: 18px;
  }

  .card-body {
    height: calc(100% - 10px - 2px - 18px);
  }

  .hover {
    @include hoverable($border-blue, 0.2em);
  }
</style>