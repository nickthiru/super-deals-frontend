<script>
  import Heading from "$lib/components/shared/Heading.svelte";
  
  export let id = "";
  // export let capSectionName = "";
</script>


<Heading 
  {id} 
  level="2" 
  class="sm"
  style="
    position: absolute;
    top: -11px;
    left: 7px;
    padding-inline: 5px;
    background-color: var(--blue-0);
  "
>
  <slot />
</Heading>