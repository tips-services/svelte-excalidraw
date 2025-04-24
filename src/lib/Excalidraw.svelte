<script module lang="ts">
  export type OnChangeArgs = {
    elements: ExcalidrawElement[];
    appState: AppState;
    files: BinaryFiles;
  };
  export type OnPointerUpdateArgs = {
    userId: string;
    pointer: {
      x: number;
      y: number;
      tool: "pointer" | "laser";
    };
    button: "up" | "down";
    pointersMap: Gesture["pointers"];
  };
</script>

<script lang="ts">
  import { browser } from "$app/environment";
  import "$lib/hotfix/processNotDefined.js";

  import ReactComponent from "./ReactComponent.svelte";
  type ExcalidrawElement = any;
  import type {
    AppProps,
    AppState,
    BinaryFiles,
    ExcalidrawImperativeAPI,
    ExcalidrawInitialDataState,
    Gesture,
  } from "@excalidraw/excalidraw/types";

  import React, { type JSX } from "react";
  import "@excalidraw/excalidraw/index.css";

  // https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/
  interface Props {
    initialData?:
      | ExcalidrawInitialDataState
      | null
      | Promise<ExcalidrawInitialDataState | null>;
    excalidrawAPI?: ExcalidrawImperativeAPI;
    isCollaborating?: boolean;
    langCode?: string;
    viewModeEnabled?: boolean;
    zenModeEnabled?: boolean;
    gridModeEnabled?: boolean;
    libraryReturnUrl?: string;
    theme?: "light" | "dark";
    name?: string;
    UIOptions?: AppProps["UIOptions"];
    handleKeyboardGlobally?: boolean;
    autoFocus?: boolean;
    onInit?: (api: ExcalidrawImperativeAPI) => void;
    onChange?: (
      elements: OnChangeArgs["elements"],
      appState: OnChangeArgs["appState"],
      files: OnChangeArgs["files"]
    ) => void;
    onPointerUpdate?: (pointerUpdate: OnPointerUpdateArgs) => void;
    onPointerDown?: (activeTool: string, pointerDownState: any) => void;
    onScrollChange?: (scrollX: number, scrollY: number) => void;
    onPaste?: (data: DataTransfer, event: ClipboardEvent) => boolean | void;
    onLibraryChange?: (items: any[]) => void;
    generateLinkForSelection?: (
      elements: readonly ExcalidrawElement[],
      appState: AppState
    ) => string | void;
    onLinkOpen?: (element: any, event: MouseEvent) => void;
    renderTopRightUI?: (isMobile: boolean, appState: AppState) => JSX.Element;
    renderCustomStats?: (
      elements: readonly ExcalidrawElement[],
      appState: AppState
    ) => JSX.Element;
    generateIdForFile?: (file: File) => string;
    validateEmbeddable?:
      | string[]
      | boolean
      | RegExp
      | RegExp[]
      | ((link: string) => boolean | undefined);
    renderEmbeddable?: (element: any) => JSX.Element | null;
    renderScrollbars?: boolean;
  }

  function setAPI(api: ExcalidrawImperativeAPI) {
    excalidrawAPI = api;
    requestAnimationFrame(() => onInit?.(api));
  }

  let {
    excalidrawAPI = $bindable(undefined as any),
    onInit,
    ...excalidrawProps
  }: Props = $props();
</script>

{#if browser}
  {#await import("@excalidraw/excalidraw") then { Excalidraw }}
    {#await import("@excalidraw/excalidraw").then((mod) => mod.MainMenu) then MainMenu}
      <ReactComponent
        excalidrawAPI={setAPI}
        this={Excalidraw}
        children={React.createElement(MainMenu, null, [
          React.createElement(MainMenu.DefaultItems.SaveAsImage, {
            key: "SaveAsImage",
          }),
          React.createElement(MainMenu.DefaultItems.Export, { key: "Export" }),
        ])}
        {...excalidrawProps}
      />
    {/await}
  {/await}
{/if}
