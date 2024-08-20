<script>
  import { setContext } from "svelte";
  import Container from "$lib/components/shared/Container.svelte";
  import FeaturedDeals from "$lib/components/page/home/featured-deals/FeaturedDeals.svelte";
  import Categories from "$lib/components/page/home/categories/Categories.svelte";
  import LatestDeals from "$lib/components/page/home/latest-deals/LatestDeals.svelte";
  import PageTitle from "$lib/components/page/home/PageTitle.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  setContext("categories", data.categories);
</script>


<Container class="app">
  <div class="grid--pg">
    <PageTitle/>
    <FeaturedDeals />
    <Categories/>
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
