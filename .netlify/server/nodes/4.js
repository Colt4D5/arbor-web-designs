import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.5f3437c2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/SvelteMarkdown.9682062c.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/Headerimage.dabf04d8.js"];
export const stylesheets = ["_app/immutable/assets/4.7c190320.css","_app/immutable/assets/Headerimage.20427a51.css"];
export const fonts = [];
