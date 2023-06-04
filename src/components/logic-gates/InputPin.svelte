<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let x = 0;
  export let y = 0;
  export let r = 5;

  export let isOn = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<circle
  class={isOn ? "gateInput gateInputActive" : "gateInput gateInactiveInput"}
  cx={x}
  cy={y}
  {r}
  on:click={() => {
    isOn = !isOn;
    dispatch("inputChanged", isOn);
  }}
/>

<style>
  .gateInput {
    stroke: var(--gate-stroke-color);
    fill: var(--gate-input-normal);
    stroke: var(--gate-stroke-color);
    stroke-width: var(--gate-stroke-width);
    cursor: pointer;
  }
  .gateInactiveInput {
    fill: rgb(27, 27, 27);
  }

  .gateInputActive {
    stroke: var(--gate-input-active);
    fill: var(--gate-input-active);
    filter: drop-shadow(0 0 7px var(--gate-input-active)) drop-shadow(0 0 5px var(--gate-input-active));
  }
</style>
