<script>
  export let type = "";
</script>


<div class={type}>
  <slot />
</div>


<style>
  .home-page {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }
</style>