<script>
  import "../app.css";
  import Heading from "$lib/components/shared/Heading.svelte";
  import Link from "$lib/components/shared/Link.svelte";
  import Text from "$lib/components/shared/Text.svelte";
</script>


<div class="app-heading">
  <Heading level="h1" class="lg center">
    Super Deals
  </Heading>
</div>

<slot />

<nav>
  <Link class="nav">
    <Text class="sm">Home</Text>
  </Link>
  <Link class="nav">
    <Text class="sm">Brands</Text>
  </Link>
  <Link class="nav">
    <Text class="sm">Editor's Choice</Text>
  </Link>
</nav>


<style>
  .app-heading {
    margin-block: 10px;
    text-align: center;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    border: 1px solid black;
  }
</style>