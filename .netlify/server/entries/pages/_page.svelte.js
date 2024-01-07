import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute, v as validate_component, s as subscribe } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Button_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "a.button.svelte-k9shsh{display:inline-block;padding:1em 2em;background-color:var(--secondary);text-transform:uppercase;color:#fff;border-radius:0.25em;margin-top:0.5em;font-size:1.1rem;font-weight:500;border-radius:2rem 0 2rem 0;border:none;box-shadow:rgba(0, 0, 0, 0.25) 0px 15px 25px, rgba(0, 0, 0, 0.1) 0px 5px 10px;font-family:'Montserrat Alternates', sans-serif;text-transform:lowercase;transition:color 0.3s ease,\n                background 0.3s ease,\n                border 0.3s ease}a.button.svelte-k9shsh:hover{background:var(--secondary-hover)}a.button.secondary.svelte-k9shsh{background-color:#fff;color:var(--secondary);border:3px solid var(--secondary)}a.button.secondary.svelte-k9shsh:hover{background-color:var(--secondary);color:#fff}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css$7);
  return `<a class="${escape(null_to_empty(classes === "" ? "button" : `button ${classes}`), true) + " svelte-k9shsh"}"${add_attribute("href", href, 0)} role="button">${slots.default ? slots.default({}) : ``}
</a>`;
});
const Pricing_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "#price-cards.svelte-1hdktch.svelte-1hdktch{margin-bottom:8rem;position:relative;z-index:2}#price-cards.svelte-1hdktch .container.svelte-1hdktch{text-align:center}#price-cards.svelte-1hdktch .container h2.svelte-1hdktch{margin-bottom:4rem}#price-cards.svelte-1hdktch .container .pricing-card.svelte-1hdktch{width:min(80%, 325px);margin:10px;margin-top:10px;background-color:#fff;box-shadow:5px 5px 12px #22222244;text-align:center;border-radius:0.5rem;display:inline-block;vertical-align:top;position:relative}#price-cards.svelte-1hdktch .container .pricing-card.most-popular.svelte-1hdktch{z-index:9}#price-cards.svelte-1hdktch .container .pricing-card.most-popular .card-heading h3.svelte-1hdktch{color:var(--light)}#price-cards.svelte-1hdktch .container .pricing-card.most-popular.svelte-1hdktch::after{content:'Most Popular';position:absolute;left:50%;top:0.5rem;transform:translate(-50%, -50%);background-color:var(--secondary);color:#fff;padding:0.15rem 1.5rem 0.75rem;white-space:nowrap;-webkit-clip-path:polygon(0 0, 100% 0, 90% 75%, 50% 100%, 10% 75%);clip-path:polygon(0 0, 100% 0, 90% 75%, 50% 100%, 10% 75%);z-index:2;border-radius:0.15rem 0.15rem 0 0}#price-cards.svelte-1hdktch .container .pricing-card.most-popular.svelte-1hdktch::before{content:'Most Popular';position:absolute;left:50%;top:0.5rem;transform:translate(-50%, -50%);background-color:var(--secondary);color:#fff;padding:0.15rem 1.5rem 0.75rem;white-space:nowrap;z-index:-1;filter:brightness(0.6);border-radius:0.15rem 0.15rem 0 0}#price-cards.svelte-1hdktch .container .pricing-card .card-heading.svelte-1hdktch{border-radius:0.5rem 0.5rem 0 0;background-color:#e5e5e5;min-height:5rem;padding:0.5rem;display:flex;justify-content:center;align-items:center;margin:0;font-weight:400;line-height:1.2}#price-cards.svelte-1hdktch .container .pricing-card .card-heading h3.svelte-1hdktch{margin-bottom:0}#price-cards.svelte-1hdktch .container .pricing-card .card-heading.active.svelte-1hdktch{background-color:var(--primary);color:#fff}#price-cards.svelte-1hdktch .container .pricing-card .pricing-card-contents.svelte-1hdktch{padding:1.5rem 1.5rem 1.5rem;min-height:300px;position:relative}#price-cards.svelte-1hdktch .container .pricing-card .pricing-card-contents h4.svelte-1hdktch{margin-bottom:1em;font-size:1.5em;line-height:1.1}#price-cards.svelte-1hdktch .container .pricing-card .pricing-card-contents h4 small.svelte-1hdktch{font-size:80%;font-weight:400}#price-cards.svelte-1hdktch .container .pricing-card .pricing-card-contents ul.svelte-1hdktch{list-style:none;margin:0.75rem 0 2rem;padding:0}#price-cards.svelte-1hdktch .container .pricing-card .pricing-card-contents ul li.svelte-1hdktch{list-style:none;margin:5px 0;font-size:1rem}@media screen and (min-width: 40em){#price-cards.svelte-1hdktch.svelte-1hdktch{margin-bottom:4rem}#price-cards.svelte-1hdktch .container .pricing-card.svelte-1hdktch:nth-child(3){scale:1.2}#price-cards.svelte-1hdktch .container .pricing-card:nth-child(3) ul li.svelte-1hdktch{font-size:0.9rem}}",
  map: null
};
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section data-transition="fade-up" id="price-cards" class="svelte-1hdktch">
  <div class="container svelte-1hdktch"><h2 class="svelte-1hdktch">pricing</h2>
    <div class="pricing-card svelte-1hdktch"><div class="card-heading svelte-1hdktch"><h3 class="svelte-1hdktch">Up Front<span style="font-size:0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h3></div>
      <div class="pricing-card-contents svelte-1hdktch"><h4 class="svelte-1hdktch"><small class="svelte-1hdktch">Starts at</small><br>$2,195<span style="font-size:0.75em;" class="asterisk" data-tooltip="+ $25 monthly hosting fee">*</span></h4>
        <ul class="svelte-1hdktch"><li class="svelte-1hdktch">Website design/build</li>
          <li class="svelte-1hdktch">Mobile Responsive</li>
          <li class="svelte-1hdktch">Fast &amp; secure</li>
          <li class="svelte-1hdktch">Custom coded</li>
          <li class="svelte-1hdktch">Logo creation</li></ul>
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/services",
      classes: "secondary cta"
    },
    {},
    {
      default: () => {
        return `Learn More`;
      }
    }
  )}</div></div>
    
    <div class="pricing-card most-popular svelte-1hdktch"><div class="card-heading active svelte-1hdktch"><h3 class="svelte-1hdktch">Subscription</h3></div>
      <div class="pricing-card-contents svelte-1hdktch"><h4 class="svelte-1hdktch">$150/mo<span style="font-size: 0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h4>
        <ul class="svelte-1hdktch"><li class="svelte-1hdktch">$0 down</li>
          <li class="svelte-1hdktch">Unlimited Edits<span class="asterisk" data-tooltip="Content edits, structure edits vary">*</span></li>
          <li class="svelte-1hdktch">Up to 5 pages</li>
          <li class="svelte-1hdktch">Search Engine Optimized</li>
          <li class="svelte-1hdktch">Google Analytics</li>
          <li class="svelte-1hdktch">24/7 technical support</li></ul>
        ${validate_component(Button, "Button").$$render($$result, { href: "/services", classes: "cta" }, {}, {
    default: () => {
      return `Learn More`;
    }
  })}</div></div>
    
    <div class="pricing-card svelte-1hdktch"><div class="card-heading svelte-1hdktch"><h3 class="svelte-1hdktch">Premium <br>Subscription<span style="font-size: 0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h3></div>
      <div class="pricing-card-contents svelte-1hdktch"><h4 class="svelte-1hdktch">$300/mo</h4>
        <ul class="svelte-1hdktch"><li class="svelte-1hdktch">1,000+ word blog post</li>
          <li class="svelte-1hdktch">Up to 8 pages</li>
          <li class="svelte-1hdktch">Premium animations</li>
          <li class="svelte-1hdktch">Custom Analytics &amp; Reporting</li>
          <li class="svelte-1hdktch">Keyword Research</li></ul>
        ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/services",
      classes: "secondary cta"
    },
    {},
    {
      default: () => {
        return `Learn More`;
      }
    }
  )}</div></div></div>
</section>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#about.svelte-1dhrwv.svelte-1dhrwv{text-align:center;margin-bottom:8rem;position:relative;overflow-x:hidden}#about.svelte-1dhrwv.svelte-1dhrwv::before{content:url(../../assets/svg/bg-leaves.svg);position:absolute;left:-2rem;bottom:0;width:12rem;opacity:0.1}#about.svelte-1dhrwv.svelte-1dhrwv::after{content:url(../../assets/svg/bg-leaves.svg);position:absolute;right:-2rem;top:0;width:16rem;transform:scaleX(-100%);opacity:0.1}#about.svelte-1dhrwv .container.svelte-1dhrwv{margin-bottom:6rem}#about.svelte-1dhrwv p.svelte-1dhrwv{max-width:800px;margin:0 auto 1rem}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section data-transition="fade-up" id="about" aria-labelledby="about-title" class="svelte-1dhrwv"><div class="container svelte-1dhrwv"><h2 id="about-title">about <theme-color>Arbor</theme-color></h2>

    <p class="svelte-1dhrwv">I&#39;m Colton Arthur Allen, a professional <b>web designer and developer</b> based in the Inland Empire, CA.</p>
    
    <p class="svelte-1dhrwv">I offer an <i>array</i> of web services with superior quality, quick turnaround, and 24/7 customer support through an innovative and affordable subscription model. Unlike large firms — where it&#39;s easy to get lost in a forest of clients — I provide personalized attention, handling everything from design and development to SEO and copywriting.</p>

    </div>
</section>`;
});
const heroWave = "/_app/immutable/assets/hero-wave.b67f4ac6.svg";
const heroWaveMobile = "/_app/immutable/assets/hero-wave-mobile.1bd6d023.svg";
const Hero_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '#hero.svelte-15dz5ek.svelte-15dz5ek{position:relative;padding:4rem 1rem 2rem;background:linear-gradient(145deg, rgba(var(--primary-dark-rgb), 0.9), rgba(var(--primary-dark-rgb), 0.7)), url(https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/footer-bg-texture_hiflfh.webp);background-size:cover;height:700px}#hero.svelte-15dz5ek .container.svelte-15dz5ek{padding:0;color:#fff;margin-top:125px;margin-bottom:3rem;position:relative;width:min(90%, 1200px);z-index:3}#hero.svelte-15dz5ek .container h1.svelte-15dz5ek{width:min(95%, 500px);margin-bottom:1rem;font-size:clamp(1.75rem, 5vw, 3rem);font-weight:700;line-height:1.2;color:#fff}#hero.svelte-15dz5ek .container p.svelte-15dz5ek{width:min(95%, 500px);margin-bottom:1rem;color:#fff}#hero.svelte-15dz5ek .container.svelte-15dz5ek .button{background-color:#fff;color:var(--secondary);border:none;box-shadow:4px 8px 8px rgb(0 0 0 / 0.2)}#hero.svelte-15dz5ek .container.svelte-15dz5ek .button:hover{background-color:var(--secondary);color:#fff}#hero.svelte-15dz5ek #wave.svelte-15dz5ek{position:absolute;bottom:0;left:0;width:100%;height:auto}#hero.svelte-15dz5ek #mockup.svelte-15dz5ek{position:relative;z-index:2}@media screen and (min-width: 64em){#hero.svelte-15dz5ek.svelte-15dz5ek{height:900px;padding-top:100px;margin-bottom:6rem;padding-bottom:0}#hero.svelte-15dz5ek #mockup.svelte-15dz5ek{position:absolute;right:14vw;top:60%;width:clamp(500px, 50vw, 700px);transform:translateY(-50%)}}html[data-theme="dark"] #hero.svelte-15dz5ek.svelte-15dz5ek{background:linear-gradient(145deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(../../assets/img/hero-dark.webp);background-size:cover;background-position:center}html[data-theme="dark"] #hero.svelte-15dz5ek #wave.svelte-15dz5ek{display:none}',
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="hero" class="svelte-15dz5ek"><div class="container svelte-15dz5ek"><h1 class="svelte-15dz5ek">web design &amp; development</h1>
    <p class="svelte-15dz5ek">Where <strong>beautiful design</strong> and top-tier <strong>performance</strong> is grafted together to get you in front of your clients, all for only <strong>$150/mo</strong> and <strong>$0 down</strong>.</p>
    ${validate_component(Button, "Button").$$render($$result, { href: "/contact" }, {}, {
    default: () => {
      return `Let&#39;s Get Started`;
    }
  })}</div>
  <picture><source media="(max-width: 799px)"${add_attribute("srcset", heroWaveMobile, 0)}>
    <source media="(min-width: 800px)"${add_attribute("srcset", heroWave, 0)}>
    <img class="wave svelte-15dz5ek"${add_attribute("src", heroWave, 0)} alt="Wave" id="wave"></picture>
  

  <picture><source media="(max-width: 1023px)" srcset="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp">
    <source media="(min-width: 1024px)" srcset="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp">
    <img src="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/mockup_qcl2hf.webp" alt="Web Mockups" id="mockup" class="svelte-15dz5ek"></picture>
</section>`;
});
const affordableIcon = "/_app/immutable/assets/affordable.7aa44ee1.svg";
const speedIcon = "/_app/immutable/assets/speedometer.281e6908.svg";
const seoIcon = "/_app/immutable/assets/seo.5d76bd7a.svg";
const sunsetIcon = "/_app/immutable/assets/sunset.19865284.svg";
const secureIcon = "/_app/immutable/assets/secure.b23755ed.svg";
const accessibleIcon = "/_app/immutable/assets/accessible.c8b1a985.svg";
const Perks_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#perks.svelte-1h7eht0.svelte-1h7eht0{text-align:center;margin-bottom:8rem}#perks.svelte-1h7eht0 .grid.svelte-1h7eht0{grid-row-gap:3rem}@media(min-width: 40em){#perks.svelte-1h7eht0 .grid.svelte-1h7eht0{grid-template-columns:repeat(2,minmax(0%,1fr))}}@media(min-width: 64em){#perks.svelte-1h7eht0 .grid.svelte-1h7eht0{grid-template-columns:repeat(3,minmax(0%,1fr))}}#perks.svelte-1h7eht0 .grid .item.svelte-1h7eht0{text-align:center}#perks.svelte-1h7eht0 .grid .item .icon.svelte-1h7eht0{display:block;margin-inline:auto}#perks.svelte-1h7eht0 .grid .item h3.svelte-1h7eht0{font-size:1.25rem;font-weight:400;margin-bottom:1em;display:inline-block;position:relative}#perks.svelte-1h7eht0 .grid .item h3.svelte-1h7eht0::before{content:'';background-image:url(../../assets/svg/bg-leaves.svg);position:absolute;top:0;left:0;width:32px;aspect-ratio:202 / 221;transform:translate(-75%, -25%) scaleX(-100%);z-index:-1;opacity:0.5}",
  map: null
};
const Perks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="perks" class="svelte-1h7eht0"><div class="container"><h2><theme-color>Arbor</theme-color> perks</h2>
    <div class="grid container svelte-1h7eht0"><div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", affordableIcon, 0)} alt="Affordable Services">
        <h3 class="svelte-1h7eht0">affordable</h3>
        <p>Introducing an affordable subscription model that simplifies website management at a budget-friendly price.</p></div>
      <div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", speedIcon, 0)} alt="Performance Driven">
        <h3 class="svelte-1h7eht0">performance-drive</h3>
        <p>Lightning-fast website performance fine-tuned with our advanced optimization techniques to ensure maximum speed and responsiveness.</p></div>
      <div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", seoIcon, 0)} alt="Search Engine Optimized">
        <h3 class="svelte-1h7eht0">search optimization</h3>
        <p>Boost your website&#39;s visibility and drive more traffic with our targeted SEO services to identify effective keywords.</p></div>
      <div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", sunsetIcon, 0)} alt="Beautiful Designs">
        <h3 class="svelte-1h7eht0">eye-catching design</h3>
        <p>Make a lasting impression with our eye-catching website designs that capture the essence of your brand and engages your visitors.</p></div>
      <div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", secureIcon, 0)} alt="Secure Websites">
        <h3 class="svelte-1h7eht0">secure hosting</h3>
        <p>Rest easy with our secure static website hosting, making it virtually impossible for attackers to compromise your site.</p></div>
      <div class="item svelte-1h7eht0"><img class="icon svelte-1h7eht0"${add_attribute("src", accessibleIcon, 0)} alt="ADA Compliant">
        <h3 class="svelte-1h7eht0">ada-compliant</h3>
        <p>We ensure your site meets accessibility standards to provide an inclusive user experience for all visitors. <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noreferrer">learn more</a></p></div></div></div>
</section>`;
});
const Offer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#offer.svelte-e246ui.svelte-e246ui{z-index:2;position:relative;border-radius:6rem 0 6rem 0}#offer.svelte-e246ui .container.svelte-e246ui{margin:0 auto;gap:3rem}#offer.svelte-e246ui .container h2.svelte-e246ui{font-size:clamp(1.75rem, 4vw, 2.25rem)}#offer.svelte-e246ui .container .right.svelte-e246ui{position:relative;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;gap:1rem;height:100%}#offer.svelte-e246ui .container .right.svelte-e246ui::before{content:url(../../assets/svg/bg-leaves.svg);position:absolute;width:80%;aspect-ratio:1/1;z-index:-1;opacity:0.15;left:50%;top:50%;transform:translate(-50%, -50%)}#offer.svelte-e246ui .container .right .item.svelte-e246ui{padding-left:2rem;margin-bottom:0.5rem}#offer.svelte-e246ui .container .right .item h3.svelte-e246ui{font-size:1.25rem;margin:0;position:relative;text-transform:lowercase}#offer.svelte-e246ui .container .right .item h3.svelte-e246ui::before{content:url(../../assets/svg/checkmark.svg);position:absolute;top:50%;left:0;width:32px;height:32px;transform:translate(calc(-100% - 6px), -50%)\n            }#offer.svelte-e246ui .container .right .item p.svelte-e246ui{margin:0}",
  map: null
};
const Offer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { params } = $$props;
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  $$result.css.add(css$2);
  return `<section data-transition="fade-up" id="offer" class="svelte-e246ui"><div class="container grid svelte-e246ui"><div class="left"><h2 id="offer-title" class="svelte-e246ui"><theme-color>$0</theme-color> down, <theme-color>${escape(params === "presale33" ? "$100" : "$150")}</theme-color> per month</h2>
      <p class="svelte-e246ui"><theme-color>Arbor Web Design</theme-color> services start at just $150 a month, with $0 down, for a 5-page website. With our help, you can create a professional and effective online presence without breaking the bank.

      </p><p class="svelte-e246ui">You own your domain, content, listings, and profiles, which means you have complete control over your online presence and can make changes or updates at any time. <a href="/contact">Contact us today</a> to get started!</p>
        
      </div>
    <div class="right svelte-e246ui"><div class="item svelte-e246ui"><h3 class="svelte-e246ui">Hosting Fees Included</h3>
        <p class="svelte-e246ui">Secure, reliable, and fast website hosting without added costs.</p></div>
      <div class="item svelte-e246ui"><h3 class="svelte-e246ui">free lifetime edits</h3>
        <p class="svelte-e246ui">24-hour turnaround for unlimited edits.</p></div>
      <div class="item svelte-e246ui"><h3 class="svelte-e246ui">24/7 Customer Service</h3>
        <p class="svelte-e246ui">Peace of mind for 24/7 technical assistance, questions, and edits.</p></div></div></div>
</section>`;
});
const Performance_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#results.svelte-1bgop1m.svelte-1bgop1m{text-align:center}#results.svelte-1bgop1m .container h2.svelte-1bgop1m{margin-bottom:4rem}#results.svelte-1bgop1m .container .grid.svelte-1bgop1m{text-align:center}#results.svelte-1bgop1m .container .grid .item.svelte-1bgop1m{margin-bottom:3rem}@media(min-width: 40em){#results.svelte-1bgop1m .container .grid .item.svelte-1bgop1m{margin-bottom:0}}#results.svelte-1bgop1m .container .grid .item .progress.svelte-1bgop1m{position:relative}#results.svelte-1bgop1m .container .grid .item .progress .num.svelte-1bgop1m{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);font-size:1.75rem;font-family:monospace}#results.svelte-1bgop1m .container .grid .item .progress svg.svelte-1bgop1m{opacity:0;margin:0 auto;width:100px;height:100px}#results.svelte-1bgop1m .container .grid .item .progress svg path.svelte-1bgop1m{transition:stroke-dasharray 0.75s ease-in}#results.svelte-1bgop1m .container .grid .item .progress svg.active.svelte-1bgop1m{opacity:1}#results.svelte-1bgop1m .container .grid .item .progress svg.active path.svelte-1bgop1m{stroke-dasharray:225pt 1000}#results.svelte-1bgop1m .container .grid .item h3.svelte-1bgop1m{margin:1rem 0 1rem;font-size:1.25rem;font-weight:400;font-family:"Montserrat Alternates", sans-serif;white-space:nowrap}#results.svelte-1bgop1m .container .grid .item .description.svelte-1bgop1m{font-size:0.9rem;line-height:1.2}',
  map: null
};
const Performance = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section data-transition="fade-up" id="results" class="svelte-1bgop1m"><div class="container"><h2 id="results-title" class="svelte-1bgop1m">out<theme-color>Perform</theme-color></h2>
    <div class="grid svelte-1bgop1m"><div class="item svelte-1bgop1m"><div class="progress svelte-1bgop1m"><span class="num svelte-1bgop1m">100</span>
          <svg data-index="0" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" class="${["svelte-1bgop1m", ""].join(" ").trim()}"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 svelte-1bgop1m" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"></path></g></svg></div>
        <h3 class="svelte-1bgop1m">Performance</h3>
        <p class="description svelte-1bgop1m">High-performance websites. Fast load times, optimal user experience.</p></div>
      <div class="item svelte-1bgop1m"><div class="progress svelte-1bgop1m"><span class="num svelte-1bgop1m">100</span>
          <svg data-index="1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" class="${["svelte-1bgop1m", ""].join(" ").trim()}"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 svelte-1bgop1m" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"></path></g></svg></div>
        <h3 class="svelte-1bgop1m">Accessibility</h3> 
        <p class="description svelte-1bgop1m">Inclusive design, using ADA-compliant best practices and accessibility standards.</p></div>
      <div class="item svelte-1bgop1m"><div class="progress svelte-1bgop1m"><span class="num svelte-1bgop1m">100</span>
          <svg data-index="2" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" class="${["svelte-1bgop1m", ""].join(" ").trim()}"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 0 0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 svelte-1bgop1m" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"></path></g></svg></div>
        <h3 class="svelte-1bgop1m">Best Practices</h3> 
        <p class="description svelte-1bgop1m">Clean, organized code to ensure efficient, secure, and easy to maintain websites.</p></div>
      <div class="item svelte-1bgop1m"><div class="progress svelte-1bgop1m"><span class="num svelte-1bgop1m">100</span>
          <svg data-index="3" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" class="${["svelte-1bgop1m", ""].join(" ").trim()}"><defs><style>.cls-1{fill:none;stroke:#23cc6f;stroke-dasharray:0 1000;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px;}</style></defs><g id="Layer_1-2"><path class="cls-1 svelte-1bgop1m" d="m49,3c25.41,0,46,20.59,46,46s-20.59,46-46,46S3,74.41,3,49,23.59,3,49,3"></path></g></svg></div>
        <h3 class="svelte-1bgop1m">SEO</h3> 
        <p class="description svelte-1bgop1m">Improved online visibility and organic traffic utilizing latest best practices in SEO.</p></div></div></div></section>

`;
});
const leaf = "/_app/immutable/assets/bg-leaves.da47a842.svg";
const Spacer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spacer.svelte-1hacg9s.svelte-1hacg9s{position:relative;text-align:center;margin-top:-4rem}.spacer.svelte-1hacg9s .leaf-divider.svelte-1hacg9s{width:32px}.spacer.svelte-1hacg9s.svelte-1hacg9s::before{content:'';position:absolute;top:50%;left:50%;height:2px;width:4rem;background-color:var(--primary);transform:translate(calc(-100% - 1.6rem), -50%)}.spacer.svelte-1hacg9s.svelte-1hacg9s::after{content:'';position:absolute;top:50%;left:50%;height:2px;width:4rem;background-color:var(--primary);transform:translate(1.5rem, -50%)}",
  map: null
};
const Spacer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="spacer svelte-1hacg9s"><img class="leaf-divider svelte-1hacg9s"${add_attribute("src", leaf, 0)} alt="leave divider">
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let promoCode = null;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1d6gpej_START -->${$$result.title = `<title>Arbor Web Designs | Moreno Valley, CA</title>`, ""}<!-- HEAD_svelte-1d6gpej_END -->`, ""}

${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(Perks, "Perks").$$render($$result, {}, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, {}, {}, {})}
${validate_component(Performance, "Performance").$$render($$result, {}, {}, {})}
${validate_component(Offer, "Offer").$$render($$result, { params: promoCode }, {}, {})}
${validate_component(Spacer, "Spacer").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}
${validate_component(Pricing, "Pricing").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
