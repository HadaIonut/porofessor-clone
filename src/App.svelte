<script>
  import { Router, Route, Link } from "svelte-navigator";
  import MainPage from "./pages/MainPage.svelte";
</script>

<Router>
  <div class="overall">
    <header>
      <nav>
        <Link to="/">Base</Link>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </header>

    <main>
      <Route path="home">
        <h3>Home</h3>
        <p>Home sweet home...</p>
      </Route>

      <Route path="about">
        <h3>About</h3>
        <p>That's what it's all about!</p>
      </Route>

      <Route>
        <MainPage/>
      </Route>
    </main>
  </div>

</Router>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    height: 100%;
  }

  .overall {
    height: 98vh;
    overflow: hidden;
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
</style>
