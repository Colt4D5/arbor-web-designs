import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Headerimage } from "../../../chunks/Headerimage.js";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="contact-form"><div class="container"><form id="contact" name="contact-page-form" method="post" netlify-honeypot="bot-field" data-netlify="true"><input type="hidden" name="form-name" value="contact-page-form">
      
      <div class="input-group"><label for="name">Full Name</label>
          <input id="name" aria-label="name" class="input1" name="name" placeholder="Full Name" type="text" required>
          <div aria-hidden="true" class="hover-box"></div></div>
    
      <div class="input-group"><label for="email">Email</label>
          <input id="email" aria-label="email" class="input1 right" name="email" placeholder="Email Address" type="email" required>
          <div aria-hidden="true" class="hover-box"></div></div>
    
      <div class="input-group"><label for="phone">Phone</label>
          <input id="phone" aria-label="phone number" class="input1" name="phone" placeholder="Phone Number" type="tel" required>
          <div aria-hidden="true" class="hover-box"></div></div>
      <div class="input-group"><label for="location">Location</label>
          <input id="location" aria-label="location" class="input1 right" name="location" placeholder="Your Location" type="text" required>
          <div aria-hidden="true" class="hover-box"></div></div>
      <div class="input-group"><label for="how">How did you hear about us</label>
          <input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Us" type="text" required>
          <div aria-hidden="true" class="hover-box"></div></div>
      <div class="input-group textarea"><label for="message">Message</label>
          <textarea id="message" aria-label="write your message" name="message" placeholder="Tell us about what you need help with" required></textarea>
          <div aria-hidden="true" class="hover-box"></div></div>
    <p class="form-submit"><button name="submit" type="submit" id="contact-submit" class="button-solid" data-submit="...Sending">Submit</button></p></form></div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-kdzcg6{max-width:800px;margin-inline:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-dulg8p_START -->${$$result.title = `<title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>`, ""}<!-- HEAD_svelte-dulg8p_END -->`, ""}

${validate_component(Headerimage, "Headerimage").$$render(
    $$result,
    {
      header: "https://res.cloudinary.com/dgo7sqipz/image/upload/v1704246842/vineyard_ahp62l.webp",
      alignment: "left 45% center",
      overlay: "background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;"
    },
    {},
    {}
  )}

<div class="container svelte-kdzcg6"><h1>contact us</h1>
	<p>At <theme-color>Arbor Web Design</theme-color>, we understand the importance of having a strong online presence and are committed to delivering custom, high-quality solutions to meet your specific needs.</p>

	<p>So don&#39;t wait, contact us today to discuss your website project and see how we can help take your online presence to the next level. Our friendly and knowledgeable team is always ready to answer any questions and guide you through the process. Just fill out the form below and let&#39;s start your journey to the web!</p>
	<hr>
	${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
