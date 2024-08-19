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
    padding: 15px;
    margin-block: 5px;
    border: 1px solid black;
    position: relative;
  }
</style>