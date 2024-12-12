<script lang="ts">
  import { createEventDispatcher } from "svelte";

  

  interface Props {
    //  const dispatch = createEventDispatcher();
    x?: number;
    y?: number;
    r?: number;
    isOn?: boolean;
  }

  let {
    x = 0,
    y = 0,
    r = 5,
    isOn = false
  }: Props = $props();
</script>

<circle class={isOn ? "gateOutput active" : "gateOutput inactive"} cx={x} cy={y} {r} />

<style>
  .gateOutput {
    stroke: var(--gate-stroke-color);
    fill: var(--gate-input-normal);
    stroke: var(--gate-stroke-color);
    stroke-width: var(--gate-stroke-width);
    /* cursor: pointer; */
  }
  .inactive {
    fill: rgb(27, 27, 27);
  }

  .active {
    stroke: var(--gate-input-active);
    fill: var(--gate-input-active);
    filter: drop-shadow(0 0 7px var(--gate-input-active)) drop-shadow(0 0 5px var(--gate-input-active));
  }
</style>
