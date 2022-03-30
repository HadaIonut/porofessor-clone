<script>
  import axios from "axios";
  import {onMount} from "svelte";
  import {getDataFromAPI} from "../utils.js";

  export let region;
  export let username;
  let data;

  onMount(async () => {
    data = await getDataFromAPI("summonerName/:username/region/:region", {username, region})
  })

</script>

<div style="color: white">{JSON.stringify(data)}</div>