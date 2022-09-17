<script lang="ts">
  import { AndModel } from "@models/AndModel";
  import Draggable from "../custom/Draggable.svelte";
  import InputPin from "./InputPin.svelte";
  import OutputPin from "./OutputPin.svelte";

  const and = new AndModel();
</script>

<Draggable>
  <div class="gateContainer">
    <svg width="100" height="100"
      ><path
        class="andGate"
        stroke-miterlimit="10"
        d="M55.9,20C55.3,20,56.5,20,55.9,20c-12.1,0-24.3,0-36.4,0
      c0,20,0,39.8,0,59.8c12.1,0,24.3,0,36.4,0C95.5,82.3,96,20,55.9,20z"
      />
      <!-- <InputPin x={80} y={49.7} r={4.9} /> -->
      <OutputPin x={80} y={49.7} r={4.9} />
      <InputPin
        x={19.3}
        y={39.6}
        r={4.9}
        on:inputChanged={(value) => {
          and.changePintStatus(0, value.detail);
        }}
      />/>
      <InputPin
        x={19.3}
        y={59}
        r={4.9}
        on:inputChanged={(value) => {
          and.changePintStatus(1, value.detail);
        }}
      />
      <!-- <circle class="gateInput" cx="80" cy="49.7" r="4.9" /> -->
      <!--  <circle class="gateInput" cx="19.3" cy="39.6" r="4.9" />
      <circle class="gateInput" cx="19.3" cy="59" r="4.9" /> -->
    </svg>
  </div>
</Draggable>

<style>
  .gateContainer {
    position: absolute;
    width: 100px;
    height: 100px;
  }
</style>
