<script>
  export let text;
</script>

<button class="primary-search-button"> {text} </button>

<style lang="scss">
  .primary-search-button {
    width: 20%;
    height: 100%;
    margin-left: 5px;
    background: #2387a9;
    border: none;
    color: white;
    text-align: center;
    font-size: 16px;
    transition: background 0.3s ease;

    &:hover {
      background: #1d708d;
    }

    &:active {
      background: #13495B;
    }
  }
</style>