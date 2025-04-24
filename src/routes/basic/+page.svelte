<script lang="ts">
  import Excalidraw from "$lib/Excalidraw.svelte";

  const initialData = {
    elements: [
      {
        type: "rectangle",
        version: 141,
        versionNonce: 361174001,
        isDeleted: false,
        id: "rect-1",
        fillStyle: "hachure",
        strokeWidth: 1,
        strokeStyle: "solid",
        roughness: 1,
        opacity: 100,
        angle: 0,
        x: 100,
        y: 100,
        strokeColor: "#000000",
        backgroundColor: "#868dfb",
        width: 300,
        height: 200,
        seed: 196841035,
        groupIds: [],
        roundness: null,
        boundElements: null,
        updated: 1,
      },
    ],
    appState: {
      viewBackgroundColor: "#ffffff",
      gridSize: null,
    },
    scrollToContent: true,
  };
</script>

<svelte:head>
  <title>Excalidraw - Basic Usage</title>
</svelte:head>

<Excalidraw
  {initialData}
  theme="light"
  name="Basic Test"
  viewModeEnabled={false}
  zenModeEnabled={false}
  gridModeEnabled={true}
  autoFocus={true}
/>
