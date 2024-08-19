<script>
  export let sectionName = "";
</script>

<section 
  aria-labelledby={sectionName} 
  style:grid-area={sectionName}
>
  <slot />
</section>


<style>
  section {
    border: 1px solid black;
    position: relative;
  }
</style>