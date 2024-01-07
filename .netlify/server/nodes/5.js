import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.775286ea.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/SvelteMarkdown.9682062c.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/Headerimage.dabf04d8.js"];
export const stylesheets = ["_app/immutable/assets/Headerimage.20427a51.css"];
export const fonts = [];
