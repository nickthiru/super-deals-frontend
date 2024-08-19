<script>
  import Container from "$lib/components/shared/Container.svelte";
  import Title from "$lib/components/page/home/Title.svelte";
  import FeaturedDeals from "$lib/components/page/home/featured-deals/FeaturedDeals.svelte";
  import Categories from "$lib/components/page/home/categories/Categories.svelte";
  import LatestDeals from "$lib/components/page/home/latest-deals/LatestDeals.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>


<Container class="app">
  <div class="grid--pg">
    <Title/>
    <FeaturedDeals />
    <Categories />
    <LatestDeals />
  </div>
</Container>


<style>
  .grid--pg {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
    "title"
    "featured-deals"
    "categories"
    "latest-deals";
    gap: 10px;
  }
</style>
