import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SvelteMarkdown } from "../../../../chunks/SvelteMarkdown.js";
import { H as Headerimage } from "../../../../chunks/Headerimage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-dulg8p_START -->${$$result.title = `<title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>`, ""}<!-- HEAD_svelte-dulg8p_END -->`, ""}

${validate_component(Headerimage, "Headerimage").$$render(
    $$result,
    {
      header: "https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp",
      alignment: "left 45% center",
      overlay: "background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;"
    },
    {},
    {}
  )}

<section id="article"><div class="container"><h1><theme-color>Arbor</theme-color> Blog</h1>

    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: data.PostContent }, {}, {})}

    <a href="/blog" role="button">Back</a></div></section>`;
});
export {
  Page as default
};
