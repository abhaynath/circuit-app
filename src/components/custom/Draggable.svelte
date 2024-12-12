<script lang="ts">
  interface Props {
    left?: number;
    top?: number;
    children?: import("svelte").Snippet;
  }

  let { left = $bindable(100), top = $bindable(100), children }: Props = $props();

  let moving = false;

  function onMouseDown() {
    moving = true;
  }
  function onMouseMove(e: any) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }
  function onMouseUp() {
    moving = false;
  }
</script>

<section  onmousedown={onMouseDown} style="left:{left}px; top:{top}px;" class="draggable">
  {@render children?.()}
</section>

<svelte:window onmouseup={onMouseUp} onmousemove={onMouseMove} />

<style>
  .draggable {
    user-select: none;
    cursor: move;
    /* border: solid 1px gray; */
    position: absolute;
  }
</style>
