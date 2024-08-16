<script>
  // import Button from "$lib/components/Button.svelte";
  import IconAccountBox from "~icons/mdi/account-box";
  import Container from "$lib/components/common/Container.svelte";
  import Heading from "$lib/components/common/Heading.svelte";
  import Grid from "$lib/components/common/Grid.svelte";
  import FeaturedDeals from "$lib/components/page/home/FeaturedDeals.svelte";
  import Categories from "$lib/components/page/home/Categories.svelte";
  import LatestDeals from "$lib/components/page/home/LatestDeals.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>


<Container type="app">
  <Heading level="1" type="lg">Big Time Deals</Heading>
  <IconAccountBox />
  <Grid type="home-page">
    <FeaturedDeals />
    <Categories />
    <LatestDeals />
  </Grid>
</Container>

<!-- <IconAccountBox />
<h1>Welcome to the Landing Page</h1> -->

<!-- <Button>Test</Button>
<Button class="outline">Testing</Button> -->
