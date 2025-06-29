import "clsx";
import { p as pop, a as push, c as attr, d as attr_class, e as escape_html } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
function Hamburger($$payload, $$props) {
  push();
  $$payload.out += `<ul id="hamburger" class="hide-for-large svelte-d33r5h"><li><button role="button" class="svelte-d33r5h"><div class="bar top svelte-d33r5h"></div> <div class="bar mid svelte-d33r5h"></div> <div class="bar bot svelte-d33r5h"></div></button></li></ul>`;
  pop();
}
const logo = "/_app/immutable/assets/logo.B_qt8gUt.svg";
function Header($$payload, $$props) {
  push();
  $$payload.out += `<header id="header" class="svelte-nzu5qq"><div class="container svelte-nzu5qq"><nav class="svelte-nzu5qq"><ul id="logo-container" class="svelte-nzu5qq"><li><a href="/"><img${attr("src", logo)} alt="Arbor Web Designs | Moreno Valley, CA" class="svelte-nzu5qq"/></a></li></ul> <ul id="nav-container" class="show-for-large svelte-nzu5qq"><li${attr_class("nav-item svelte-nzu5qq", void 0, { "active": page.url.pathname === "/" })}><a href="/" class="svelte-nzu5qq">Home</a></li> <li${attr_class("nav-item svelte-nzu5qq", void 0, { "active": page.url.pathname === "/about-arbor" })}><a href="/about-arbor" class="svelte-nzu5qq">About</a></li> <li${attr_class("nav-item svelte-nzu5qq", void 0, { "active": page.url.pathname == "/services" })}><a href="/services" class="svelte-nzu5qq">Services</a></li> <li${attr_class("nav-item svelte-nzu5qq", void 0, { "active": page.url.pathname == "/contact" })}><a href="/contact" class="svelte-nzu5qq">Contact</a></li></ul> `;
  Hamburger($$payload);
  $$payload.out += `<!----></nav></div></header>`;
  pop();
}
const footerWave = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%20595'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_7'%3e%3cpath%20class='cls-1'%20d='m1920,0v4.29c-171.81,100.23-322.32,135.33-381,135.71-174.08,1.12-217.47-27.7-359-24-155.42,4.06-317.57,108.01-468.11,194.22-12.53,7.18-24.98,14.24-37.34,21.1,8.42.41,16.64,1.68,24.35,4.1,54.21,17.01,82.5,60.49,100.58,131.64,3.34,13.13,9.54,31.62,9.54,31.62,0,0-109.85,5.3-166.79-10.95-4.51-1.29-8.75-2.93-12.74-4.87-15.64,48.44-53.77,112.14-53.77,112.14,0,0-11.3-11.99-19.75-19.7-45.8-41.83-66.91-80.22-57.98-127.37,2.92-15.37,11.36-30.32,21.42-43.48-27.11,9.36-53.44,15.96-78.84,18.87-10.35,1.2-20.54,1.77-30.57,1.68-145.18-1.36-255.29-120.27-410-287.76V0h1920Z'/%3e%3c/g%3e%3c/svg%3e";
function Footer($$payload, $$props) {
  push();
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  $$payload.out += `<footer id="footer" class="svelte-1c7u3a"><div class="footer-top container grid svelte-1c7u3a"><div class="footer-col logo svelte-1c7u3a"><a href="/" class="svelte-1c7u3a"><img${attr("src", logo)} alt="Web Designs" class="svelte-1c7u3a"/></a> <p class="svelte-1c7u3a">Moreno Valley, CA<br/> <a href="tel:+19516307569" class="svelte-1c7u3a">951.630.7569</a><br/> <a href="mailto:info@arborwebdesign.com" class="svelte-1c7u3a">info@arborwebdesign.com</a></p></div> <div class="footer-col navigation svelte-1c7u3a"><h2 class="svelte-1c7u3a">navigation</h2> <nav class="svelte-1c7u3a"><ul class="svelte-1c7u3a"><li class="svelte-1c7u3a"><a href="/" class="svelte-1c7u3a">Home</a></li> <li class="svelte-1c7u3a"><a href="/about-arbor" class="svelte-1c7u3a">About Us</a></li> <li class="svelte-1c7u3a"><a href="/#price-cards" class="svelte-1c7u3a">Pricing</a></li> <li class="svelte-1c7u3a"><a href="/contact/" class="svelte-1c7u3a">Contact Us</a></li></ul></nav></div> <div class="footer-col contact-form svelte-1c7u3a"><h2 class="svelte-1c7u3a">contact us</h2> <form id="contact" name="footer-contact-form" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="svelte-1c7u3a"><input type="hidden" name="form-name" value="footer-contact-form" class="svelte-1c7u3a"/> <div class="input-group"><input id="name" aria-label="name" class="input1 svelte-1c7u3a" name="name" placeholder="Full Name" type="text" required/> <div aria-hidden="true" class="hover-box"></div></div> <div class="input-group"><input id="email" aria-label="email" class="input1 right svelte-1c7u3a" name="email" placeholder="Email Address" type="email" required/> <div aria-hidden="true" class="hover-box"></div></div> <div class="input-group"><input id="industry" aria-label="industry" class="input1 right svelte-1c7u3a" name="industry" placeholder="Industry" type="text" required/> <div aria-hidden="true" class="hover-box"></div></div> <p class="form-submit"><button name="submit" type="submit" id="contact-submit" class="button-solid svelte-1c7u3a" data-submit="...Sending">Get Started</button></p></form></div></div> <div class="footer-bottom svelte-1c7u3a"><p class="disclaimer svelte-1c7u3a">Copyright © ${escape_html(year)} | <a href="/" class="svelte-1c7u3a">Arbor Web Designs</a> | All Rights Reserved</p></div> <picture><source media="(max-width: 1023px)"${attr("srcset", footerWave)}/> <source media="(min-width: 1024px)"${attr("srcset", footerWave)}/> <img id="footer-wave"${attr("src", footerWave)} alt="Arbor Web Designs | Riverside, CA" class="svelte-1c7u3a"/></picture></footer>`;
  pop();
}
const closeIcon = "data:image/svg+xml,%3csvg%20width='24px'%20height='24px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20data-name='Layer%202'%3e%3cg%20data-name='close'%3e%3crect%20width='24'%20height='24'%20transform='rotate(180%2012%2012)'%20opacity='0'/%3e%3cpath%20d='M13.41%2012l4.3-4.29a1%201%200%201%200-1.42-1.42L12%2010.59l-4.29-4.3a1%201%200%200%200-1.42%201.42l4.3%204.29-4.3%204.29a1%201%200%200%200%200%201.42%201%201%200%200%200%201.42%200l4.29-4.3%204.29%204.3a1%201%200%200%200%201.42%200%201%201%200%200%200%200-1.42z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function OffcanvasNav($$payload, $$props) {
  push();
  $$payload.out += `<div class="hamburger-overlay svelte-ph51bb"></div> <div id="offcanvas-nav" class="svelte-ph51bb"><nav><ul class="svelte-ph51bb"><li${attr_class("nav-item svelte-ph51bb", void 0, { "active": page.url.pathname === "/" })}><a href="/" class="svelte-ph51bb">Home</a></li> <li${attr_class("nav-item svelte-ph51bb", void 0, { "active": page.url.pathname == "/about-arbor" })}><a href="/about-arbor" class="svelte-ph51bb">About</a></li> <li${attr_class("nav-item svelte-ph51bb", void 0, { "active": page.url.pathname == "/services" })}><a href="/services" class="svelte-ph51bb">Services</a></li> <li${attr_class("nav-item svelte-ph51bb", void 0, { "active": page.url.pathname == "/contact" })}><a href="/contact" class="svelte-ph51bb">Contact</a></li></ul></nav> <button id="close-btn" class="no-styles svelte-ph51bb"><img${attr("src", closeIcon)} alt="Close button" class="svelte-ph51bb"/></button></div>`;
  pop();
}
function ToTopBtn($$payload) {
  let y = void 0;
  $$payload.out += `<a${attr_class("button to-top-btn svelte-1gmd5ef", void 0, { "isScrolled": y > 800 })} href="#header">Top</a>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  Header($$payload);
  $$payload.out += `<!----> <main id="main">`;
  children($$payload);
  $$payload.out += `<!----></main> `;
  Footer($$payload, {});
  $$payload.out += `<!----> `;
  OffcanvasNav($$payload);
  $$payload.out += `<!----> `;
  ToTopBtn($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
