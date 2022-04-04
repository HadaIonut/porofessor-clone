<script>
  export let imageURL;
  export let altImg;
  export let primaryText;
  export let secondaryText;
</script>

<img
    src="{imageURL}"
    alt="{altImg}"
    class="error-image">
<div class="error-message">
  <div class="primary-error">
    {primaryText}
  </div>
  <div class="secondary-error">
    {secondaryText}
  </div>
</div>

<style lang="scss">
  @import "src/mixins/generics";

  .error-image {
    @include fixed-size(20rem);
  }

  .primary-error {
    color: white;
    font-size: 24px;
  }

  .secondary-error {
    color: #ababab;
    font-size: 20px;
  }
</style>