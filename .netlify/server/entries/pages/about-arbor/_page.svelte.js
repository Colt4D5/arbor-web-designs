import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Headerimage } from "../../../chunks/Headerimage.js";
import { S as SmallForm } from "../../../chunks/SmallForm.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section#about.svelte-159apmw .top.svelte-159apmw{display:flex;flex-direction:column}@media(min-width: 40em){section#about.svelte-159apmw .top.svelte-159apmw{flex-direction:row}}section#about.svelte-159apmw .top .left.svelte-159apmw{flex:2}section#about.svelte-159apmw .top .right.svelte-159apmw{flex:1}section#about.svelte-159apmw p.svelte-159apmw:has( + ul){margin-bottom:0}section#about.svelte-159apmw ul.svelte-159apmw{padding-left:2rem}section#about.svelte-159apmw ul li.svelte-159apmw{list-style-image:url(../../lib/assets/svg/bg-leaves.svg);padding-left:0.5rem;line-height:1}section#about.svelte-159apmw ul li.svelte-159apmw::marker{font-size:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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

<section id="about" class="svelte-159apmw"><div class="container"><div class="top svelte-159apmw"><div class="left svelte-159apmw"><h1>about <theme-color>Arbor</theme-color></h1>

				<p class="svelte-159apmw">Having a website in today&#39;s technological climate is no longer a luxury but a necessity. That&#39;s why we&#39;ve created a solution that takes care of all your website needs, so you can focus on growing your business. Our team of expert designers and developers will work closely with you to bring your vision to life and keep it up to date with the latest design trends and modern technological advancements.</p>

				<p class="svelte-159apmw"><theme-color>Arbor Web Design</theme-color> is revolutionizing the way businesses approach their online presence. Our innovative subscription model offers a hassle-free and cost-effective solution for companies looking to bring in new customers who were once out of reach.</p>
			
				<p class="svelte-159apmw">Our subscription model includes:</p>
				<ul class="svelte-159apmw"><li class="svelte-159apmw">Custom website design and development</li>
					<li class="svelte-159apmw">Ongoing website maintenance and updates</li>
					<li class="svelte-159apmw">24/7 support and problem resolution</li>
					<li class="svelte-159apmw">Regular website performance optimization</li></ul>
			
				<p class="svelte-159apmw">With our subscription model, you can enjoy peace of mind and focus on what&#39;s important to your business, knowing that your website is in good hands. No more worrying about unexpected expenses or falling behind on the latest website design trends.
				Let us help you bring your online presence to the next level. Contact us today to learn more about our innovative subscription model and how it can benefit your business.</p></div>
			<div class="right svelte-159apmw"></div></div></div></section>

${validate_component(SmallForm, "SmallForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
