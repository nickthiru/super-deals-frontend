<script>
  export let section = "";
</script>

<section 
  aria-labelledby={section} 
  style:grid-area={section}
>
  <slot />
</section>


<style>
  section {
    border: 1px solid black;
    position: relative;
  }
</style>