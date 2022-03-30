<script>
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";

  export let region;
  export let username;
  let matchData;

  onMount(async () => {
    matchData = await getDataFromAPI("summonerName/:username/region/:region", {username, region})
  })

</script>

<pre style="color: white">{JSON.stringify(matchData)}</pre>