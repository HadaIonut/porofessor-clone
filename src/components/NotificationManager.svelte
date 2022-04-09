<script>
import notifications from "../storeModules/notifications.js";
import Notification from "./Notification.svelte";

let localNotifications;

notifications.subscribe(val => {
  localNotifications = val;
})

</script>

<div class="notifications-container">
  {#each Object.keys(localNotifications) as notification}
    <Notification key={notification}/>
  {/each}
</div>

<style lang="scss">
  .notifications-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>