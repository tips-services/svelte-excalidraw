<script>
  import Excalidraw from "$lib/Excalidraw.svelte";

  let lastChange = "-";
  let lastPointer = "-";

  function handleChange(elements, appState, files) {
    lastChange = `Elements: ${elements.length}`;
  }

  function handlePointer(pointerUpdate) {
    lastPointer = `x: ${pointerUpdate.pointer.x}, y: ${pointerUpdate.pointer.y}, tool: ${pointerUpdate.pointer.tool}`;
  }
</script>

<svelte:head>
  <title>Excalidraw - Event Handling</title>
</svelte:head>

<main>
  <aside>
    <div><strong>Last Change:</strong> {lastChange}</div>
    <div><strong>Pointer Update:</strong> {lastPointer}</div>
  </aside>

  <section>
    <Excalidraw
      onChange={handleChange}
      onPointerUpdate={handlePointer}
      gridModeEnabled={true}
      autoFocus={true}
      name="Events Test"
    />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  aside {
    padding: 1rem;
    background: #f2f2f2;
    font-family: monospace;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  section {
    width: 100%;
    height: 100%;
  }
</style>
