<script>
  import Section from "$lib/components/shared/Section.svelte";
  import SectionTitle from "$lib/components/shared/SectionTitle.svelte";
  import { capitalize } from "$lib/util/capitalize";

  let sectionName = "latest-deals";

  $: capSectionName = capitalize(sectionName, "-");
</script>


<Section {sectionName}>
  <SectionTitle id={sectionName}>
    {capSectionName}
  </SectionTitle>
</Section>