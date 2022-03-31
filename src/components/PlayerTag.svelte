<script>
  export let type;
  export let content;
  export let description;
</script>

<div class="tag-container good-tag">
  tag
</div>

<div class="tag-container bad-tag">
  tag
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
</style>
