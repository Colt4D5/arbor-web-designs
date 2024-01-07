import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.e2d6dd30.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/stores.6c6ee030.js","_app/immutable/chunks/singletons.c5dc2de6.js"];
export const stylesheets = ["_app/immutable/assets/2.8e11885b.css"];
export const fonts = [];
