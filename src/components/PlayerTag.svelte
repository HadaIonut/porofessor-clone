<script>
  import SvelteTooltip from 'svelte-tooltip';

  export let type;
  export let content;
  export let description;
</script>

<div class="tag-content {type}-tag">
  <SvelteTooltip tip={description} top>
    {content}
  </SvelteTooltip>
</div>

<style lang="scss">
  @import "src/mixins/colors";

  .tag-content {
    padding: 5px 20px 5px 20px;
    width: fit-content;
    height: fit-content;
    margin: 5px;
    cursor: default;
  }

  .good-tag {
    color: $green;
    border: $green 1px solid;
  }

  .bad-tag {
    color: $red;
    border: $red 1px solid;
  }

  .neutral-tag {
    color: $yellow;
    border: $yellow 1px solid;
  }
</style>
