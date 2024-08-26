<script>
  import CardBrandsList from "$lib/components/shared/card/CardBrandsList.svelte";
  import Section from "$lib/components/shared/Section.svelte";

  export let data;
  console.log("data: " + JSON.stringify(data, null, 2));

  const brands = data.brands;
  // console.log("products: " + JSON.stringify(products, null, 2));

  let sectionName = "brands";
</script>


<Section {sectionName}>
  {#each brands as brand}
    <CardBrandsList {brand} />
  {/each}
</Section>
