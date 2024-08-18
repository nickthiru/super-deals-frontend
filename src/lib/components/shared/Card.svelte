<script>
  export let type = "";
</script>


<div class={type}>
  <slot />
</div>


<style>
  .border {
    border: 1px solid black;
  }
</style>