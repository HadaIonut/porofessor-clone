<script>
  export let type;
  export let content;
  export let description;
</script>

<div class="tag-container {type}-tag">
  {content}
</div>

<style lang="scss">
  .tag-container {
    padding: 5px 20px 5px 20px;
    width: fit-content;
  }

  .good-tag {
    color: greenyellow;
    border: greenyellow 1px solid;
  }

  .bad-tag {
    color: red;
    border: red 1px solid;
  }

  .neutral-tag {
    color: yellow;
    border: yellow 1px solid;
  }
</style>
