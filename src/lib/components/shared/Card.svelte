<script>
  $: classes = $$props.class;
</script>


<div class={classes}>
  <slot />
</div>


<style>
  .border {
    border: 1px solid var(--gray-5);
  }
</style>