<script>
  import { getContext } from "svelte";
  import "iconify-icon";
  import CategoriesItem from "./CategoriesItem.svelte";

  // let categories = [
  //     {
  //       icon: "ion:fast-food-outline",
  //       name: "Food & Drink",
  //     },
  //     {
  //       icon: "cil:bathroom",
  //       name: "Bathroom",
  //     },
  //     {
  //       icon: "map:jewelry-store",
  //       name: "Jewelry",
  //     },
  //     {
  //       icon: "material-symbols:sports-tennis-outline",
  //       name: "Sports",
  //     },
  //     {
  //       icon: "zondicons:computer-laptop",
  //       name: "Tech",
  //     },
  //     {
  //       icon: "clarity:car-line",
  //       name: "Auto",
  //     },
  //     {
  //       icon: "icon-park-outline:entertainment",
  //       name: "Entertainment",
  //     },
  //     {
  //       icon: "streamline:travel-places-beach-island-waves-outdoor-recreation-tree-beach-palm-wave-water",
  //       name: "Travel",
  //     },
  //   ]

  const categories = getContext("categories");
</script>


<div class="categories-items">
  {#each categories as category}
    <CategoriesItem {category}/>
  {/each}
</div>


<style>
  .categories-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
</style>
