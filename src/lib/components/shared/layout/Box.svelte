<div class="box {$$props.class}">
  <slot />
</div>


<style>
  .box {
    --color-light: var(--gray-0);
    --color-dark: var(--gray-12);
    
    padding: var(--p);
    border-width: var(--b-size, var(--border-size-1));
    border-style: var(--b-style, solid);
    border-color: var(--b-color, black);
    border-radius: var(--b-radius);
    color: var(--color-dark);
    background-color: var(--color-light);
  }

  .box * {
    color: inherit;
  }

  .box.invert {
    color: var(--color-light);
    background-color: var(--color-dark);
  }
</style>