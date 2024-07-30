<script>
  export let style = "";
</script>


<button class={"default " + style}>
  <slot />
</button>


<style>
  .default {
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 40px;
    border: 0;
    transition: background-color 200ms, color 200ms;
  }

  .outline {
    box-shadow: 1px 1px 7px #c4c4c4;
    padding: 8px 25px;
    border-radius: 10px;
  }
</style>