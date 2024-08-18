<script>
  import Link from "$lib/components/shared/Link.svelte";
  import Text from "$lib/components/shared/Text.svelte";
</script>


<slot />

<nav>
  <Link type="nav">
    <Text type="sm">Home</Text>
  </Link>
  <Link type="nav">
    <Text type="sm">Brands</Text>
  </Link>
  <Link type="nav">
    <Text type="sm">Editor's Choice</Text>
  </Link>
  <Link type="nav">
    <Text type="sm">Settings</Text>
  </Link>
</nav>


<style>
  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: fixed;
    bottom: 0;

    height: 50px;
    border: 1px solid black;
  }
</style>