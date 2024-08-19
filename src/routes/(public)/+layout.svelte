<script>
  import Link from "$lib/components/shared/Link.svelte";
  import Text from "$lib/components/shared/Text.svelte";
</script>


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
  <Link class="nav">
    <Text class="sm">Settings</Text>
  </Link>
</nav>


<style>
  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* justify-items: center;
    align-items: center; */
    position: fixed;
    bottom: 0;

    height: 50px;
    border: 1px solid black;
  }
</style>