<script lang="ts">
  // Source: https://gist.github.com/mquandalle/709e2ba691aa6dc6086a40df88bd4f1b
  import { createElement } from "react";
  import { createRoot as createReactRoot } from "react-dom/client";
  import { onMount, onDestroy } from "svelte";

  let container = $state(undefined as any as HTMLDivElement);
  let reactRoot = $state(undefined as any as ReturnType<typeof createReactRoot>);

  const { this: el, children, class: classNames, ...props } = $props();

  onMount(() => {
    reactRoot = createReactRoot(container);
  });

  $effect(() => {
    reactRoot.render(createElement(el, props, children));
  });

  onDestroy(() => {
    reactRoot?.unmount();
  });
</script>

<div bind:this={container} class={classNames}></div>

<style>
  div {
    height: 100%;
    min-height: 350px;
  }
</style>