<script>
  import Section from "../shared/Section.svelte";
  import CategoriesItems from "./CategoriesItems.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";
  import { capitalize } from "$lib/util/capitalize";


  let sectionName = "categories";

  $: capSectionName = capitalize(sectionName, "-");
</script>


<Section {sectionName}>
  <SectionTitle id={sectionName}>
    {capSectionName}
  </SectionTitle>
  <CategoriesItems/>
</Section>