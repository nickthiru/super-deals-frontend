<script>
  export let url = "#";

  $: classes = $$props.class;
</script>

<a href={url} class={classes}>
  <slot />
</a>

<style>
  a {
    color: var(--gray-12);
    text-decoration: none;
    text-align: center;
  }

  .nav {
    color: var(--blue-4);
  }
</style>