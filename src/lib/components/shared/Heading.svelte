<script>
  export let level = "";
  export let type = "";
</script>


{#if level === "1"}
	<h1 class={type}>
    <slot />
  </h1>
{:else if level === "2"}
  <h2 class={type}>
    <slot />
  </h2>
{/if}


<style>
  h1, h2 {
    font-family: var(--font-rounded-sans);
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }

  .lg {
    font-size: 2.5rem;
  }

  .md {
    font-size: 1.75rem;
  }
</style>