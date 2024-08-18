<script>
  export let type = "";
  export let url = "#";
</script>

<a href={url} class={type}>
  <slot />
</a>

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