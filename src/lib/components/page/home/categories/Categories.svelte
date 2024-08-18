<script>
  import Text from "$lib/components/shared/Text.svelte";
  import Section from "../Section.svelte";

  import { capitalize } from "$lib/util/capitalize";

  let section = "categories";

  $: capSection = capitalize(section, "-");
</script>


<!-- <section 
  aria-labelledby="categories" 
  style:grid-area="categories"
>
  <Text id="categories">Categories</Text>
</section>


<style>
  section {
    border: 1px solid black;
    position: relative
  }
</style> -->

<Section {section}>
  <Text id={section}>{capSection}</Text>
</Section>