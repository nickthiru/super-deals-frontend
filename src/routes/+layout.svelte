<script>
  import "../app.css";
  import Heading from "$lib/components/shared/Heading.svelte";
</script>


<div>
  <Heading level="h1" class="lg center">
    Big Time Deals
  </Heading>
</div>

<slot />


<style>
  div {
    margin-block: 10px;
    text-align: center;
  }
</style>