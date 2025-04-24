import { browser } from "$app/environment";
// Fix for: ReferenceError: process is not defined at node_modules/@excalidraw/excalidraw/main.js
if (browser) window.process = { env: { IS_PREACT: false } };