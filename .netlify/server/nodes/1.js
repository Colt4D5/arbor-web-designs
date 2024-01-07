

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3554bbcb.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/stores.6c6ee030.js","_app/immutable/chunks/singletons.c5dc2de6.js"];
export const stylesheets = [];
export const fonts = [];
