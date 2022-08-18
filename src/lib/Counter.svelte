<script lang="ts">
  import Fa from "svelte-fa";
  import { faUser, faKey, faChartPie, faFileCode, faTools } from "@fortawesome/free-solid-svg-icons";
  let count: number = 0;

  /**
   * increment is good function to increment value
   */
  const increment = () => {
    count += 1;
  };
</script>

<div>
  <Fa icon={faChartPie} />
</div>
<button on:click={increment}>
  count is {count}
</button>
