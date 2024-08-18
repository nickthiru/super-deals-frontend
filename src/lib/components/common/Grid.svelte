<script>
  export let type = "";
</script>


<div class={type}>
  <slot />
</div>


<style>
  .home-page {
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
    "title"
    "featured-deals"
    "categories"
    "latest-deals";
    gap: 10px;
  }
</style>