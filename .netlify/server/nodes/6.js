

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.edbe68c4.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/Headerimage.dabf04d8.js"];
export const stylesheets = ["_app/immutable/assets/6.9acd0166.css","_app/immutable/assets/Headerimage.20427a51.css"];
export const fonts = [];
