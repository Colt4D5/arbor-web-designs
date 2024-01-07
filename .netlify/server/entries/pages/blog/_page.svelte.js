import { c as create_ssr_component, v as validate_component, a as each, e as escape, b as add_attribute } from "../../../chunks/index.js";
import { S as SvelteMarkdown } from "../../../chunks/SvelteMarkdown.js";
import { H as Headerimage } from "../../../chunks/Headerimage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#blog-feed.svelte-1c4hhha .post-teaser h2.svelte-1c4hhha{margin-bottom:1rem}#blog-feed.svelte-1c4hhha hr.svelte-1c4hhha{margin-block:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
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

<section id="blog-feed" class="svelte-1c4hhha"><div class="container"><h1><theme-color>Arbor</theme-color> Blog</h1>

			${each(posts, (post, i) => {
    return `<div class="post-teaser"><h2 class="svelte-1c4hhha">${escape(post.title.toLowerCase())}</h2>
					${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: post.teaser }, {}, {})}
					<a${add_attribute("href", `/blog/${post.slug}`, 0)} role="button">Read More</a></div>

				${i < posts.length - 1 ? `<hr class="svelte-1c4hhha">` : ``}`;
  })}</div>
</section>`;
});
export {
  Page as default
};
