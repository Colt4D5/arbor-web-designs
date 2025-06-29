import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DuJ-x5My.js","_app/immutable/chunks/Cw7BOSTy.js","_app/immutable/chunks/BzAk2lqo.js","_app/immutable/chunks/DqnytR6W.js","_app/immutable/chunks/C86X3-rB.js","_app/immutable/chunks/Dr4cXvwv.js","_app/immutable/chunks/CudJ78Ur.js","_app/immutable/chunks/BPeg6XjU.js","_app/immutable/chunks/mIQigwJj.js","_app/immutable/chunks/CwQAagSc.js","_app/immutable/chunks/CAcJI45W.js"];
export const stylesheets = ["_app/immutable/assets/2.DNChTwHt.css"];
export const fonts = [];
