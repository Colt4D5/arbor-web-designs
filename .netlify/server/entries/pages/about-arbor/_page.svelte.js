import { h as head } from "../../../chunks/index2.js";
import { H as Headerimage } from "../../../chunks/Headerimage.js";
import { S as SmallForm } from "../../../chunks/SmallForm.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>`;
  });
  Headerimage($$payload, {
    header: "https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp",
    alignment: "left 45% center",
    overlay: "background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;"
  });
  $$payload.out += `<!----> <section id="about" class="svelte-iar2r2"><div class="container"><div class="top svelte-iar2r2"><div class="left svelte-iar2r2"><h1>about <theme-color>Arbor</theme-color></h1> <p class="svelte-iar2r2">Having a website in today's technological climate is no longer a luxury but a necessity. That's why we've created a solution that takes care of all your website needs, so you can focus on growing your business. Our team of expert designers and developers will work closely with you to bring your vision to life and keep it up to date with the latest design trends and modern technological advancements.</p> <p class="svelte-iar2r2"><theme-color>Arbor Web Design</theme-color> is revolutionizing the way businesses approach their online presence. Our innovative subscription model offers a hassle-free and cost-effective solution for companies looking to bring in new customers who were once out of reach.</p> <p class="svelte-iar2r2">Our subscription model includes:</p> <ul class="svelte-iar2r2"><li class="svelte-iar2r2">Custom website design and development</li> <li class="svelte-iar2r2">Ongoing website maintenance and updates</li> <li class="svelte-iar2r2">24/7 support and problem resolution</li> <li class="svelte-iar2r2">Regular website performance optimization</li></ul> <p class="svelte-iar2r2">With our subscription model, you can enjoy peace of mind and focus on what's important to your business, knowing that your website is in good hands. No more worrying about unexpected expenses or falling behind on the latest website design trends.
				Let us help you bring your online presence to the next level. Contact us today to learn more about our innovative subscription model and how it can benefit your business.</p></div> <div class="right svelte-iar2r2"></div></div></div></section> `;
  SmallForm($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
