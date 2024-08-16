<script>
  export let type = "";
</script>


<p class={type}>
  <slot />
</p>


<style>
p {
  font-family: var(--font-rounded-sans);
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0px;
}

.bold {
  font-weight: 700;
}

.lg {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 100%;
}

</style>