<script>
  import {fly} from 'svelte/transition';
  import notifications from "../storeModules/notifications.js";
  import {notificationDropSpeed} from "../constants/animations.js";

  export let key;

  let notificationData;

  notifications.subscribe((value) => {
    notificationData = value[key];
  })
</script>

{#if notificationData}
  <div class="notification {notificationData.type}"
       transition:fly="{{ y: -100, duration: notificationDropSpeed }}">
    {notificationData.message}
  </div>
{/if}

<style lang="scss">
  @import "src/mixins/colors";

  .notification {
    position: absolute;
    top: 10px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    width: 90vw;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
  }

  .error {
    color: #721c24;
    background: #f8d7da;
  }

  .info {
    color: #004085;
    background-color: #cce5ff;
  }

  .warn {
    color: #856404;
    background-color: #fff3cd;
  }
</style>