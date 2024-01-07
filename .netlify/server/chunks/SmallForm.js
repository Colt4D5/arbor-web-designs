import { c as create_ssr_component } from "./index.js";
const SmallForm_svelte_svelte_type_style_lang = "";
const css = {
  code: "section#form.svelte-a44bw9.svelte-a44bw9{margin-top:-4rem;margin-bottom:5rem}@media(min-width: 40em){section#form.svelte-a44bw9.svelte-a44bw9{margin-bottom:0}}section#form.svelte-a44bw9 .container.svelte-a44bw9{margin-inline:auto}section#form.svelte-a44bw9 .container form.svelte-a44bw9{position:relative;width:min(90%, 800px);background-color:#fff;margin-inline:auto;padding:2.5rem 1.5rem;border-radius:0.5rem;box-shadow:0px 10px 15px -3px rgba(0,0,0,0.1);border:1px solid #ddd}@media(min-width: 40em){section#form.svelte-a44bw9 .container form.svelte-a44bw9{margin-left:auto;margin-right:0}}section#form.svelte-a44bw9 .container form.svelte-a44bw9::before{content:url(../../assets/svg/bg-leaves.svg);position:absolute;width:250px;left:50%;top:0;transform:translate(-50%, -85%) rotate(300deg);z-index:-1;opacity:0.1}@media(min-width: 40em){section#form.svelte-a44bw9 .container form.svelte-a44bw9::before{width:400px;left:0;top:40%;transform:translate(-90%, -50%) rotate(210deg)}}section#form.svelte-a44bw9 .container form textarea.svelte-a44bw9{line-height:1.4}section#form.svelte-a44bw9 .container form h2.svelte-a44bw9{text-align:center}",
  map: null
};
const SmallForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="form" class="svelte-a44bw9"><div class="container svelte-a44bw9"><form id="contact" name="Contact Form2" method="post" data-netlify="true" class="svelte-a44bw9"><h2 class="svelte-a44bw9">contact <theme-color>Arbor</theme-color></h2>
      <div class="grid"><div class="left"><div class="input-group"><input id="name" aria-label="name" class="input1" name="name" placeholder="Full Name" type="text" required>
              <div aria-hidden="true" class="hover-box"></div></div>
        
          <div class="input-group"><input id="email" aria-label="email" class="input1 right" name="email" placeholder="Email Address" type="email" required>
              <div aria-hidden="true" class="hover-box"></div></div>
        
          <div class="input-group"><input id="phone" aria-label="phone number" class="input1" name="phone" placeholder="Phone Number" type="tel" required>
              <div aria-hidden="true" class="hover-box"></div></div></div>
        <div class="right"><div class="input-group"><input id="how" aria-label="how did you hear about us" name="hear" placeholder="How Did You Hear About Arbor" type="text" required>
              <div aria-hidden="true" class="hover-box"></div></div>
          <div class="input-group textarea"><textarea id="message" aria-label="write your message" name="message" placeholder="Tell us how Arbor can help you" rows="4" required class="svelte-a44bw9"></textarea>
              <div aria-hidden="true" class="hover-box"></div></div></div></div>
		<p class="form-submit"><button name="submit" type="submit" id="contact-submit" class="button-solid" data-submit="...Sending">Submit</button></p></form></div>
</section>`;
});
export {
  SmallForm as S
};
