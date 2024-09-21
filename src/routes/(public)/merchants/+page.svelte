<script>
  import Box from "$lib/components/shared/layout/Box.svelte";
import Stack from "$lib/components/shared/layout/Stack.svelte";
</script>


<Stack --space="var(--size-8)">
  <div>child 1</div>
  <div>child 2</div>
  <div>child 3</div>
</Stack>

<Box
  --p="var(--size-4)"
  --b-size="var(--border-size-4)"
  --b-color="var(--red-8)"
>
  <p>Testing</p>
</Box>

<Box
  --p="var(--size-4)"
  --b-color="var(--red-8)"
  --b-radius="var(--radius-3)"
>
  <p>Testing</p>
</Box>

<Box
  --b-color="var(--red-8)"
>
  <p>Testing</p>
</Box>

<Box class="invert"
>
  <p>Testing</p>
</Box>


<style>
  div {
    background-color: blueviolet;
  }
</style>