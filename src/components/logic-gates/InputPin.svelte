<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  interface Props {
    x?: number;
    y?: number;
    r?: number;
    isOn?: boolean;
  }

  let {
    x = 0,
    y = 0,
    r = 5,
    isOn = $bindable(false)
  }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<circle
  class={isOn ? "gateInput gateInputActive" : "gateInput gateInactiveInput"}
  cx={x}
  cy={y}
  {r}
  onclick={() => {
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
