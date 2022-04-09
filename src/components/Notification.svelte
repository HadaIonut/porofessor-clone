<script>
  import { fly } from 'svelte/transition';
  import notifications from "../storeModules/notifications.js";
  import {notificationDropSpeed} from "../constants/animations.js";

  export let shouldRender;

  notifications.subscribe((value) => {
    shouldRender = value['123'];
  })
</script>

{#if shouldRender}
  <div class="notification" transition:fly="{{ y: -100, duration: notificationDropSpeed }}">{shouldRender.message}</div>
{/if}

<style lang="scss">
  @import "src/mixins/colors";
  .notification {
    position: absolute;
    top: 10px;
    color: $white;
    background: red;
  }
</style>