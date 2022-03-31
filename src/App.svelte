<script>
  import { Router, Route, Link } from "svelte-navigator";
  import MainPage from "./pages/MainPage.svelte";
  import MatchView from "./pages/MatchView.svelte";
</script>

<Router>
    <header></header>

    <main>
      <Route path="/:region/:username" let:params>
        <MatchView region="{params.region}" username="{params.username}"/>
      </Route>

      <Route>
        <MainPage/>
      </Route>
    </main>

</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  header {
    height: 5%;
  }

  main {
    height: 95%;
    padding-left: 10px;
    padding-right: 10px;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  :global(body) {
    background: #36393f;
    height: 98vh;
    padding: 0;
    margin: 0;
  }

  :global(#app) {
    height: 100%;
  }
</style>
