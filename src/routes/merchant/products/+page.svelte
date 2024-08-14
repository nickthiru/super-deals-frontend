<script>
  export let data;

  $: console.log("data in products/+page.svelte: " + JSON.stringify(data, null, 2));
</script>

<h1>Products List Page</h1>