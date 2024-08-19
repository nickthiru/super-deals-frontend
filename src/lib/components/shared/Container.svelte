<script>
  $: classes = $$props.class;
</script>

<div class={classes}>
  <slot />
</div>


<style>
  .app {
    min-width: 375px;
    padding-inline: 20px;
    margin-inline: auto;
    margin-block: 20px;
  }

  /* @media (width >= 90rem) {
    .app {
      max-width: 960px;
    }
  } */
</style>