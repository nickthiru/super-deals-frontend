<script>
  export let type = "";
</script>

<a href="/" class={type}><slot /></a>

<style>
  a {
    color: black;
    text-decoration: none;
    text-align: center;
  }

  .nav {
    color: var(--blue-4);
  }
</style>