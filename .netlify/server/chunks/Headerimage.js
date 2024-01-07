import { c as create_ssr_component, b as add_attribute } from "./index.js";
const intHeaderLeaf = "/_app/immutable/assets/int-header-leaf.cdf6c8ce.svg";
const Headerimage_svelte_svelte_type_style_lang = "";
const css = {
  code: "#headerimage.svelte-1163ebn.svelte-1163ebn{height:300px;background-size:cover;position:relative}@media(min-width: 40em){#headerimage.svelte-1163ebn.svelte-1163ebn{height:500px}}#headerimage.svelte-1163ebn #int-header-leaf.svelte-1163ebn{position:absolute;bottom:0;left:0;width:100%;min-height:80px;-o-object-fit:cover;object-fit:cover;-o-object-position:right;object-position:right;scale:1.01}",
  map: null
};
const Headerimage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { alignment } = $$props;
  let { overlay = "" } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.overlay === void 0 && $$bindings.overlay && overlay !== void 0)
    $$bindings.overlay(overlay);
  $$result.css.add(css);
  return `<div id="headerimage" class="interior svelte-1163ebn"${add_attribute("style", `background-image: url(${header});background-position: ${alignment}`, 0)}><div class="overlay"${add_attribute("style", overlay, 0)}></div>
  <img id="int-header-leaf"${add_attribute("src", intHeaderLeaf, 0)} alt="" class="svelte-1163ebn">
</div>`;
});
export {
  Headerimage as H
};
