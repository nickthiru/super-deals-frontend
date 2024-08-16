<script>
  export let type = "";
</script>


<!-- <div class={$$restProps.class}>
  <slot />
</div> -->

<div class={type}>
  <slot />
</div>


<style>
  .app {
    min-width: 375px;
    padding-inline: 20px;
    margin-inline: auto;
    margin-block: 20px;
  }

  .border {
    border: 1px solid black;
  }

  /* @media (width >= 90rem) {
    .app {
      max-width: 960px;
    }
  } */
</style>