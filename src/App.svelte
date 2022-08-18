<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Draggable from "./components/custom/Draggable.svelte";
  import AndGateComponent from "./components/logic-gates/AndGateComponent.svelte";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div class="circuitBoard">
    <AndGateComponent />
    <AndGateComponent />
  <!--   <Draggable>
    </Draggable>

    <Draggable>
    </Draggable>
 -->
  </div>
  <div>
    <p style="color: white;">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum error recusandae magni repudiandae, adipisci veritatis voluptatibus iste! Quisquam fugiat,
      perspiciatis earum architecto, qui cupiditate expedita nemo impedit obcaecati rem quaerat.
    </p>
    <p style="color: white;">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum error recusandae magni repudiandae, adipisci veritatis voluptatibus iste! Quisquam fugiat,
      perspiciatis earum architecto, qui cupiditate expedita nemo impedit obcaecati rem quaerat.
    </p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <Counter />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
