<script>
  import Container from "$lib/components/common/Container.svelte";
  import Grid from "$lib/components/common/Grid.svelte";
  import Title from "$lib/components/page/home/Title.svelte";
  import FeaturedDeals from "$lib/components/page/home/FeaturedDeals.svelte";
  import Categories from "$lib/components/page/home/Categories.svelte";
  import LatestDeals from "$lib/components/page/home/LatestDeals.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>


<Container type="app">
  <Grid type="home-page">
    <Title/>
    <FeaturedDeals />
    <Categories />
    <LatestDeals />
  </Grid>
</Container>

<!-- <IconAccountBox />
<h1>Welcome to the Landing Page</h1> -->

<!-- <Button>Test</Button>
<Button class="outline">Testing</Button> -->
