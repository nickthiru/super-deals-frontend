<script>
  import Text from "$lib/components/shared/Text.svelte";
  import Section from "../Section.svelte";

  import { capitalize } from "$lib/util/capitalize";

  let section = "latest-deals";

  $: capSection = capitalize(section, "-");
</script>


<Section {section}>
  <Text id={section}>{capSection}</Text>
</Section>