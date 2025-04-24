# `svelte-excalidraw` lib

![banner](/README.excalidraw.svg)

### Thin Svelte wrapper around [Excalidraw](https://github.com/excalidraw/excalidraw), the virtual whiteboard for sketching hand-drawn like diagrams.

[Try it in SvelteLab](https://www.sveltelab.dev/yo9bz95u2mwe5m6)

## Installation

```bash
npm i svelte-excalidraw
```

## Usage

```svelte
<script>
  import Excalidraw from "svelte-excalidraw";
</script>

<Excalidraw />
```

> This will render an embedded Excalidraw canvas with default behavior.

## Props

https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/

All `props` are _optional_.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`initialData`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/initialdata) | `object` &#124; `null` &#124; <code>Promise<object &#124; null></code> | `null` | The initial data with which app loads. |
| [`excalidrawAPI`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/excalidraw-api) | `function` | \_ | Callback triggered with the excalidraw api once rendered |
| [`isCollaborating`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#iscollaborating) | `boolean` | \_ | This indicates if the app is in `collaboration` mode |
| [`onChange`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onchange) | `function` | \_ | This callback is triggered whenever the component updates due to any change. This callback will receive the excalidraw `elements` and the current `app state`. |
| [`onPointerUpdate`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onpointerupdate) | `function` | \_ | Callback triggered when mouse pointer is updated. |
| [`onPointerDown`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onpointerdown) | `function` | \_ | This prop if passed gets triggered on pointer down events |
| [`onScrollChange`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onscrollchange) | `function` | \_ | This prop if passed gets triggered when scrolling the canvas. |
| [`onPaste`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onpaste) | `function` | \_ | Callback to be triggered if passed when something is pasted into the scene |
| [`onLibraryChange`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onlibrarychange) | `function` | \_ | The callback if supplied is triggered when the library is updated and receives the library items. |
| [`generateLinkForSelection`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#generatelinkforselection) | `function` | \_ | Allows you to override `url` generation when linking to Excalidraw elements. |
| [`onLinkOpen`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#onlinkopen) | `function` | \_ | The callback if supplied is triggered when any link is opened. |
| [`langCode`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#langcode) | `string` | `en` | Language code string to be used in Excalidraw |
| [`renderTopRightUI`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/render-props#rendertoprightui) | `function` | \_ | Render function that renders custom UI in top right corner |
| [`renderCustomStats`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/render-props#rendercustomstats) | `function` | \_ | Render function that can be used to render custom stats on the stats dialog. |
| [`viewModeEnabled`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#viewmodeenabled) | `boolean` | \_ | This indicates if the app is in `view` mode. |
| [`zenModeEnabled`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#zenmodeenabled) | `boolean` | \_ | This indicates if the `zen` mode is enabled |
| [`gridModeEnabled`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#gridmodeenabled) | `boolean` | \_ | This indicates if the `grid` mode is enabled |
| [`libraryReturnUrl`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#libraryreturnurl) | `string` | \_ | What URL should [libraries.excalidraw.com](https://libraries.excalidraw.com) be installed to |
| [`theme`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#theme) | `"light"` &#124; `"dark"` | `"light"` | The theme of the Excalidraw component |
| [`name`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#name) | `string` |  | Name of the drawing |
| [`UIOptions`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/ui-options) | `object` | [DEFAULT UI OPTIONS](https://github.com/excalidraw/excalidraw/blob/master/packages/excalidraw/constants.ts#L151) | To customise UI options. Currently we support customising [`canvas actions`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/ui-options#canvasactions) |
| [`detectScroll`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#detectscroll) | `boolean` | `true` | Indicates whether to update the offsets when nearest ancestor is scrolled. |
| [`handleKeyboardGlobally`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#handlekeyboardglobally) | `boolean` | `false` | Indicates whether to bind the keyboard events to document. |
| [`autoFocus`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#autofocus) | `boolean` | `false` | Indicates whether to focus the Excalidraw component on page load |
| [`generateIdForFile`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#generateidforfile) | `function` | \_ | Allows you to override `id` generation for files added on canvas |
| [`validateEmbeddable`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props#validateembeddable) | `string[]` \| `boolean` \| `RegExp` \| `RegExp[]` \| <code>((link: string) => boolean &#124; undefined)</code> | \_ | use for custom src url validation |
| [`renderEmbeddable`](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api/props/render-props#renderEmbeddable) | `function` | \_ | Render function that can override the built-in `<iframe>` |
| [`renderScrollbars`] | `boolean`| | `false` | Indicates whether scrollbars will be shown

## Development

```bash
npm install
npm run dev
```

To build and package:

```bash
npm run build
npm run package
npm pack
```

## Credits

- Powered by [Excalidraw](https://github.com/excalidraw/excalidraw?tab=readme-ov-file#readme) & [Svelte](https://svelte.dev/)
- Wrapped for Svelte by [TipS](https://tips.dev/)
