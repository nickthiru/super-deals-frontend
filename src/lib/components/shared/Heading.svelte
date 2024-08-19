<script>
  export let level = "";
  export let id = "";

  $: classes = $$props.class;
</script>


{#if level === "1"}
	<h1 {id} class={classes}>
    <slot />
  </h1>
{:else if level === "2"}
  <h2 {id} class={classes}>
    <slot />
  </h2>
{/if}


<style>
  h1, h2 {
    font-family: var(--font-rounded-sans);
    font-weight: var(--font-weight-4);
    line-height: var(--font-lineheight-1);
    letter-spacing: var(--font-letterspacing-1);
  }

  .center {
    text-align: center;
  }

  .lg {
    font-size: var(--font-size-5);
  }

  .md {
    font-size: var(--font-size-3);
  }

  .sm {
    font-size: var(--font-size-1);
  }
</style>