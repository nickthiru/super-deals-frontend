<script>
  import Section from "../shared/Section.svelte";
  import Heading from "$lib/components/shared/Heading.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";

  import { capitalize } from "$lib/util/capitalize";

  let sectionName = "featured-deals";

  $: capSectionName = capitalize(sectionName, "-");
</script>


<Section {sectionName}>
  <SectionTitle id={sectionName}>
    {capSectionName}
  </SectionTitle>
</Section>