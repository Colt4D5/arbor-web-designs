import { b as attr_style, c as attr } from "./index2.js";
const intHeaderLeaf = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%20147.49'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_3'%3e%3cpath%20class='cls-1'%20d='m1920,0v147.49H0V0h1631.1c-7.48,9.24-13.78,19.73-16.29,30.66-8,34.86,6.63,64.07,39.56,96.54,6.07,5.98,14.15,15.24,14.15,15.24,0,0,30.22-46.37,43.26-82.01,2.91,1.56,6.02,2.9,9.35,3.99,41.95,13.73,123.94,12.92,123.94,12.92,0,0-4.1-13.95-6.21-23.83-4.47-20.92-10.22-38.73-17.95-53.51h99.09Z'/%3e%3c/g%3e%3c/svg%3e";
function Headerimage($$payload, $$props) {
  let { header, alignment, overlay = "" } = $$props;
  $$payload.out += `<div id="headerimage" class="interior svelte-1163ebn"${attr_style(`background-image: url(${header});background-position: ${alignment}`)}><div class="overlay"${attr_style(overlay)}></div> <img id="int-header-leaf"${attr("src", intHeaderLeaf)} alt="" class="svelte-1163ebn"/></div>`;
}
export {
  Headerimage as H
};
