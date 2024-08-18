<script>
  export let type = "";
</script>


<div class={type} style={$$props.style}>
  <slot />
</div>


<style>
  .border {
    border: 1px solid black;
  }
</style>