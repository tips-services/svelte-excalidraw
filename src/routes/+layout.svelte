<script lang="ts">
  import { page as pageState } from "$app/state";
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();

  const pages = [
    { name: "🏠", path: "/" },
    { name: "Basic", path: "/basic" },
    { name: "Events", path: "/events" },
  ];
</script>

<svelte:head>
  <title>Svelte Excalidraw</title>
</svelte:head>

<main>
  <nav>
    {#each pages as page}
      <a class:active={pageState.url.pathname === page.path} href={page.path}
        >{page.name}</a
      >
    {/each}
  </nav>
  <section>
    {@render children()}
  </section>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: #f2f2f2;
    border-bottom: 1px solid #ccc;
  }

  nav a {
    all: unset;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  nav a:hover {
    background: #eaeaea;
  }
  nav a.active {
    font-weight: bold;
    background-color: #d0eaff;
    border-color: #007acc;
  }

  section {
    width: 100%;
    height: 100%;
    display: contents;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
