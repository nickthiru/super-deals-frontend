<script>
  export let level = "";
  export let id = "";
  export let style = "";

  $: classes = $$props.class;
</script>


{#if level === "1"}
	<h1 {id} class={classes} {style}>
    <slot />
  </h1>
{:else if level === "2"}
  <h2 {id} class={classes} {style}>
    <slot />
  </h2>
{:else if level === "3"}
  <h3 {id} class={classes} {style}>
    <slot />
  </h3>
{/if}


<style>
  h1, h2, h3 {
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