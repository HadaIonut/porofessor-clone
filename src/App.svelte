<script>
    import { Router, Route, Link } from "svelte-navigator";
    import MainPage from "./pages/MainPage.svelte";
    import MatchView from "./pages/MatchView.svelte";
    import PlayerView from "./pages/PlayerView.svelte";
</script>

<Router>
    <header></header>

    <main>
        <Route path="/match/:region/:username" let:params>
            <MatchView region="{params.region}" username="{params.username}"/>
        </Route>

        <Route path="/user/:username" let:params>
            <PlayerView username="{params.username}"/>
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
    //padding-left: 100px;
    //padding-right: 100px;
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
