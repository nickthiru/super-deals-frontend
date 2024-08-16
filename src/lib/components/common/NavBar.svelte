<script>
  import Link from "./Link.svelte";
</script>


<nav>
  <Link type="nav">Home</Link>
  <Link type="nav">Brands</Link>
  <Link type="nav">Editor's Choice</Link>
  <Link type="nav">Settings</Link>
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