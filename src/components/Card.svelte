<script>
  export let className = '';
  export let hoverableTitle = false;
  export let headerOnClick = function (){};
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

  .hover {
    display: block;
    position: relative;
    padding: 0.25em 0;
    cursor: pointer;

    &:hover::after {
      transform: scale(1);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.2em;
      background-color: #2387a9;
      transition: opacity 200ms, transform 200ms;
      opacity: 1;
      transform: scale(0);
      transform-origin: center;
    }
  }
</style>