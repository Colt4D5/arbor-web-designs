import { c as create_ssr_component, s as subscribe, b as add_attribute, v as validate_component, e as escape } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const pico_min = "";
const fonts = "";
const app = "";
const vars = "";
const utilities = "";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "#hamburger.svelte-d33r5h.svelte-d33r5h{position:absolute;top:50%;right:1rem;transform:translateY(-50%);z-index:101}#hamburger.svelte-d33r5h button.svelte-d33r5h{width:30px;height:30px;display:block;position:relative;background-color:transparent;border:none}#hamburger.svelte-d33r5h button .bar.svelte-d33r5h{position:absolute;left:0;width:100%;height:4px;border-radius:8px;background-color:#fff;transition:all 0.3s ease;pointer-events:none}#hamburger.svelte-d33r5h button .bar.top.svelte-d33r5h{top:4px;transform-origin:top center}#hamburger.svelte-d33r5h button .bar.mid.svelte-d33r5h{top:50%;transform:translateY(-50%)}#hamburger.svelte-d33r5h button .bar.bot.svelte-d33r5h{bottom:4px;transform-origin:bottom center}#hamburger.svelte-d33r5h:hover button .bar.svelte-d33r5h{background-color:var(--primary)}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `
<ul id="hamburger" class="hide-for-large svelte-d33r5h"><li><button role="button" class="svelte-d33r5h"><div class="bar top svelte-d33r5h"></div>
      <div class="bar mid svelte-d33r5h"></div>
      <div class="bar bot svelte-d33r5h"></div></button></li>
</ul>`;
});
const logo = "/_app/immutable/assets/logo.f27c8bf5.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-nzu5qq.svelte-nzu5qq{position:absolute;width:100%;top:0;left:0;margin:0 auto;background-color:rgb(0 0 0 / 0);z-index:4;transition:all 0.5s ease}header.svelte-nzu5qq .container.svelte-nzu5qq{position:relative}header.svelte-nzu5qq .container nav #logo-container img.svelte-nzu5qq{filter:invert(1);width:clamp(150px, 30vw, 250px);transition:all 0.5s ease}header.svelte-nzu5qq .container nav #nav-container li a.svelte-nzu5qq{color:#fff;position:relative;margin-left:1.5rem;font-family:'Montserrat Alternates', sans-serif}header.svelte-nzu5qq .container nav #nav-container li a.svelte-nzu5qq:hover{color:var(--secondary)}header.svelte-nzu5qq .container nav #nav-container li a.svelte-nzu5qq::before{content:'';position:absolute;top:100%;left:auto;right:0;width:0;height:3px;background-color:var(--secondary);transition:width 0.2s ease-out}header.svelte-nzu5qq .container nav #nav-container li.active a.svelte-nzu5qq::before{width:100%;left:0;right:auto}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<header id="header" class="svelte-nzu5qq"><div class="container svelte-nzu5qq"><nav><ul id="logo-container"><li><a href="/" class="svelte-nzu5qq"><img${add_attribute("src", logo, 0)} alt="Arbor Web Designs | Moreno Valley, CA" class="svelte-nzu5qq"></a></li></ul>
      <ul id="nav-container" class="show-for-large"><li class="${["nav-item", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/" class="svelte-nzu5qq">Home</a></li>
        <li class="${["nav-item", $page.url.pathname === "/about-arbor" ? "active" : ""].join(" ").trim()}"><a href="/about-arbor" class="svelte-nzu5qq">About</a></li>
        <li class="${["nav-item", $page.url.pathname == "/services" ? "active" : ""].join(" ").trim()}"><a href="/services" class="svelte-nzu5qq">Services</a></li>
        
        <li class="${["nav-item", $page.url.pathname == "/contact" ? "active" : ""].join(" ").trim()}"><a href="/contact" class="svelte-nzu5qq">Contact</a></li>
        </ul>
      ${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}</nav></div>
</header>`;
});
const footerWave = "/_app/immutable/assets/footer-wave.f652e3b5.svg";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `footer.svelte-14dvwxm.svelte-14dvwxm{position:relative;background:linear-gradient(145deg, rgba(var(--primary-dark-rgb), 0.9), rgba(var(--primary-dark-rgb), 0.7)), url(https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/footer-bg-texture_hiflfh.webp);text-align:center;color:#fff;margin-top:-6rem}footer.svelte-14dvwxm .footer-top.container.svelte-14dvwxm{padding:32vw 1rem 3rem;margin-inline:auto}footer.svelte-14dvwxm .footer-top.container .footer-col.svelte-14dvwxm{margin-bottom:2.5rem}footer.svelte-14dvwxm .footer-top.container .footer-col h2.svelte-14dvwxm{display:inline-block;margin:0 auto;position:relative;margin-bottom:1.5rem;color:#fff;font-size:clamp(1.25rem, 4vw, 1.5rem)}footer.svelte-14dvwxm .footer-top.container .footer-col h2.svelte-14dvwxm::after{content:'';position:absolute;height:2px;width:80%;bottom:-0.5rem;left:50%;transform:translateX(-50%);background-color:var(--primary-hover)}footer.svelte-14dvwxm .footer-top.container .footer-col nav.svelte-14dvwxm{justify-content:center}@media(min-width: 40.001em){footer.svelte-14dvwxm .footer-top.container .footer-col nav.svelte-14dvwxm{justify-content:flex-start}}footer.svelte-14dvwxm .footer-top.container .footer-col nav ul.svelte-14dvwxm{display:block;margin:0}footer.svelte-14dvwxm .footer-top.container .footer-col nav ul li.svelte-14dvwxm{display:block;padding:0.15em 0}footer.svelte-14dvwxm .footer-top.container .footer-col nav ul li a.svelte-14dvwxm{font-family:'Montserrat Alternates', sans-serif;font-size:clamp(1.1em, 3vw, 1.25em)}footer.svelte-14dvwxm .footer-top.container .footer-col a.svelte-14dvwxm{color:#fff}footer.svelte-14dvwxm .footer-top.container .footer-col a.svelte-14dvwxm:hover{color:var(--secondary-hover)}footer.svelte-14dvwxm #footer-wave.svelte-14dvwxm{position:absolute;top:-2px;left:0;width:100vw;height:auto;pointer-events:none}footer.svelte-14dvwxm .footer-top .footer-col.logo.svelte-14dvwxm{min-width:250px}footer.svelte-14dvwxm .footer-top .footer-col.logo img.svelte-14dvwxm{max-width:250px;filter:invert(1);display:inline;margin:0 auto 1rem}footer.svelte-14dvwxm .footer-top .footer-col.logo p.svelte-14dvwxm{color:#fff;line-height:1.7}footer.svelte-14dvwxm .footer-top .footer-col.logo p a.svelte-14dvwxm{font-weight:bold}footer.svelte-14dvwxm .footer-top .footer-col.contact-form form.svelte-14dvwxm{margin-top:1rem}footer.svelte-14dvwxm .footer-top .footer-col.contact-form form input.svelte-14dvwxm{font-size:clamp(0.85rem, 3vw, 1rem);padding:0.5rem 0.75rem;height:auto}footer.svelte-14dvwxm .footer-top .footer-col.contact-form form input.svelte-14dvwxm:not([type="submit"]){border:1px solid #ccc;border-radius:1em 0.25em 1em 0.25em;background:#fff;margin:0 0 15px;box-sizing:border-box}footer.svelte-14dvwxm .footer-top .footer-col.contact-form form button.svelte-14dvwxm{background-color:var(--secondary);color:#fff;text-transform:lowercase;font-family:"Montserrat Alternates", sans-serif;font-size:clamp(1.15rem, 3vw, 1.25rem);padding:0.75rem 1rem;border:none;box-shadow:4px 3px 6px rgb(0 0 0 / 0.4);border-radius:1.5em 0 1.5em 0;transition:all 0.3s ease}footer.svelte-14dvwxm .footer-top .footer-col.contact-form form button.svelte-14dvwxm:hover{border-color:transparent;background-color:var(--secondary-hover)}footer.svelte-14dvwxm .footer-bottom.svelte-14dvwxm{background-color:rgb(0 0 0 / 0.15)}footer.svelte-14dvwxm .footer-bottom p.svelte-14dvwxm{text-align:center;font-size:0.8rem;color:#fff;width:max(60%, 300px);margin:0 auto;padding:1rem 0}footer.svelte-14dvwxm .footer-bottom p a.svelte-14dvwxm{color:#fff;text-decoration:underline}footer.svelte-14dvwxm .footer-bottom p a.svelte-14dvwxm:hover{color:var(--primary-hover)}@media screen and (min-width: 40em){footer.svelte-14dvwxm.svelte-14dvwxm{margin-top:-12vw}footer.svelte-14dvwxm .footer-top.container.svelte-14dvwxm{padding:32vw 1rem 3rem}footer.svelte-14dvwxm .footer-top.container .footer-col.svelte-14dvwxm{text-align:left}footer.svelte-14dvwxm .footer-top.container .footer-col h2.svelte-14dvwxm::after{width:calc(100% + 2rem);left:0;transform:none}}`,
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year = (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$2);
  return `<footer id="footer" class="svelte-14dvwxm"><div class="footer-top container grid svelte-14dvwxm"><div class="footer-col logo svelte-14dvwxm"><a href="/" class="svelte-14dvwxm"><img${add_attribute("src", logo, 0)} alt="Web Designs" class="svelte-14dvwxm"></a>
      <p class="svelte-14dvwxm">Moreno Valley, CA<br>
      <a href="tel:+19516307569" class="svelte-14dvwxm">951.630.7569</a><br>
      <a href="mailto:info@arborwebdesign.com" class="svelte-14dvwxm">info@arborwebdesign.com</a></p></div>
    <div class="footer-col navigation svelte-14dvwxm"><h2 class="svelte-14dvwxm">navigation</h2>
      <nav class="svelte-14dvwxm"><ul class="svelte-14dvwxm"><li class="svelte-14dvwxm"><a href="/" class="svelte-14dvwxm">Home</a></li>
          <li class="svelte-14dvwxm"><a href="/about-arbor" class="svelte-14dvwxm">About Us</a></li>
          <li class="svelte-14dvwxm"><a href="/#price-cards" class="svelte-14dvwxm">Pricing</a></li>
          <li class="svelte-14dvwxm"><a href="/contact/" class="svelte-14dvwxm">Contact Us</a></li></ul></nav></div>
    <div class="footer-col contact-form svelte-14dvwxm"><h2 class="svelte-14dvwxm">contact us</h2>

      <form id="contact" name="footer-contact-form" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="svelte-14dvwxm"><input type="hidden" name="form-name" value="footer-contact-form" class="svelte-14dvwxm">

        <div class="input-group"><input id="name" aria-label="name" class="input1 svelte-14dvwxm" name="name" placeholder="Full Name" type="text" required>
          <div aria-hidden="true" class="hover-box"></div></div>

        <div class="input-group"><input id="email" aria-label="email" class="input1 right svelte-14dvwxm" name="email" placeholder="Email Address" type="email" required>
          <div aria-hidden="true" class="hover-box"></div></div>

        <div class="input-group"><input id="industry" aria-label="industry" class="input1 right svelte-14dvwxm" name="industry" placeholder="Industry" type="text" required>
          <div aria-hidden="true" class="hover-box"></div></div>

        <p class="form-submit svelte-14dvwxm"><button name="submit" type="submit" id="contact-submit" class="button-solid svelte-14dvwxm" data-submit="...Sending">Get Started</button></p></form></div></div>
  <div class="footer-bottom svelte-14dvwxm"><p class="disclaimer svelte-14dvwxm">Copyright © ${escape(year)} | <a href="/" class="svelte-14dvwxm">Arbor Web Designs</a> | All Rights Reserved</p></div>
  <picture><source media="(max-width: 1023px)"${add_attribute("srcset", footerWave, 0)}>
    <source media="(min-width: 1024px)"${add_attribute("srcset", footerWave, 0)}>
    <img id="footer-wave"${add_attribute("src", footerWave, 0)} alt="Arbor Web Designs | Riverside, CA" class="svelte-14dvwxm"></picture>
</footer>`;
});
const closeIcon = "/_app/immutable/assets/close.581580b8.svg";
const OffcanvasNav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `#offcanvas-nav.svelte-ph51bb.svelte-ph51bb{position:fixed;left:100%;top:0;height:100vh;background-color:#eee;z-index:9999;padding:6rem 1rem 1rem;transition:transform 0.5s ease;transform:translate3d(0, 0, 0);width:min(80%, 450px);text-align:right}#offcanvas-nav.svelte-ph51bb ul.svelte-ph51bb{text-align:right;flex-direction:column;margin-left:auto;margin-right:1rem}#offcanvas-nav.svelte-ph51bb ul li.svelte-ph51bb{padding:0.5rem 0;margin-bottom:0.5rem}#offcanvas-nav.svelte-ph51bb ul li a.svelte-ph51bb{font-size:1.75rem;padding-right:1rem;font-family:'Montserrat Alternates', sans-serif;color:#444}#offcanvas-nav.svelte-ph51bb ul li.active.svelte-ph51bb{border-right:2px solid var(--primary)}#offcanvas-nav.svelte-ph51bb #close-btn.svelte-ph51bb{position:absolute;top:1rem;right:1rem}#offcanvas-nav.svelte-ph51bb #close-btn img.svelte-ph51bb{width:48px;height:48px}html[data-mobile-menu="is_open"] #offcanvas-nav.svelte-ph51bb.svelte-ph51bb{transform:translate3d(-100%, 0, 0)}html[data-mobile-menu="is_open"] .hamburger-overlay.svelte-ph51bb.svelte-ph51bb{opacity:1;pointer-events:all}.hamburger-overlay.svelte-ph51bb.svelte-ph51bb{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgb(0 0 0 / 0.75);z-index:98;transition:all 0.3s ease;opacity:0;pointer-events:none}`,
  map: null
};
const OffcanvasNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="hamburger-overlay svelte-ph51bb"></div>
<div id="offcanvas-nav" class="svelte-ph51bb"><nav><ul class="svelte-ph51bb"><li class="${["nav-item svelte-ph51bb", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/" class="svelte-ph51bb">Home</a></li>
      <li class="${["nav-item svelte-ph51bb", $page.url.pathname == "/about-arbor" ? "active" : ""].join(" ").trim()}"><a href="/about-arbor" class="svelte-ph51bb">About</a></li>
      <li class="${["nav-item svelte-ph51bb", $page.url.pathname == "/services" ? "active" : ""].join(" ").trim()}"><a href="/services" class="svelte-ph51bb">Services</a></li>
      <li class="${["nav-item svelte-ph51bb", $page.url.pathname == "/contact" ? "active" : ""].join(" ").trim()}"><a href="/contact" class="svelte-ph51bb">Contact</a></li></ul></nav>
  <button id="close-btn" class="no-styles svelte-ph51bb"><img${add_attribute("src", closeIcon, 0)} alt="Close button" class="svelte-ph51bb"></button>
</div>`;
});
const ToTopBtn_svelte_svelte_type_style_lang = "";
const css = {
  code: ".to-top-btn.svelte-1gmd5ef{position:fixed;right:1rem;bottom:1rem;background-color:rgba(var(--primary-rgb), 0.5);color:#fff;padding:0.75em 1em 0.5em;border-radius:1.5em 0 1.5em 0;text-decoration:none;z-index:999;opacity:0;pointer-events:none;transition:opacity 0.3s ease,\n    background-color 0.3s ease}.to-top-btn.svelte-1gmd5ef:hover{background-color:rgba(var(--primary-rgb), 0.85)}.to-top-btn.svelte-1gmd5ef::before{content:url(../assets/svg/chevron-up.svg);position:absolute;top:0;left:50%;transform:translateX(-50%);filter:invert(1)}.to-top-btn.isScrolled.svelte-1gmd5ef{opacity:1;pointer-events:all}",
  map: null
};
const ToTopBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  console.log(y);
  $$result.css.add(css);
  return `<a class="${["button to-top-btn svelte-1gmd5ef", ""].join(" ").trim()}" href="#header">Top</a>

`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main id="main">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}

${validate_component(OffcanvasNav, "OffcanvasNav").$$render($$result, {}, {}, {})}

${validate_component(ToTopBtn, "ToTopBtn").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
