<script>
  import Button from "./Button.svelte";
  import RegionRadioButton from "./RegionRadioButton.svelte";
  import axios from "axios";
  import {regionToUrlMap} from "../constants/regions.js";
  import {devKey} from "../constants/devKey.js";

  let inputValue = '';
  let regionSelected = 'EUNE';

  const handleInput = (event) => {
    inputValue = event.target.value
  }

  const handleClick = async () => {
    const resp = await axios({
      method: 'get',
      url: `https://${regionToUrlMap[regionSelected]}/${inputValue}?api_key=${devKey}`,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    console.log(resp)
  }
</script>

<div class="summoner-input">
  <div class="input-container">
    <input on:change={handleInput} class="primary-name-input" type="text">
    <Button on:click={handleClick} text="Search"/>
  </div>
  <RegionRadioButton bind:regionSelected={regionSelected}/>
</div>

<style>
    .input-container {
        width: 50vw;
        height: 5vh;
        display: flex;
    }

    .primary-name-input {
        width: 79%;
        font-size: 24px;
    }
</style>