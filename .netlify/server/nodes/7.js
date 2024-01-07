

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.06581a8c.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/Headerimage.dabf04d8.js","_app/immutable/chunks/SmallForm.4f676fa2.js"];
export const stylesheets = ["_app/immutable/assets/7.2bf1c77b.css","_app/immutable/assets/Headerimage.20427a51.css","_app/immutable/assets/SmallForm.048983ce.css"];
export const fonts = [];
