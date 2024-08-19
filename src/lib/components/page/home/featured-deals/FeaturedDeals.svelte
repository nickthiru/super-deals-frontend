<script>
  import Section from "../shared/Section.svelte";
  import Heading from "$lib/components/shared/Heading.svelte";
  import { capitalize } from "$lib/util/capitalize";

  let sectionName = "featured-deals";

  $: capSection = capitalize(sectionName, "-");
</script>


<Section {sectionName}>
  <Heading id={sectionName} level="2" class="sm">
    {capSection}
  </Heading>
</Section>