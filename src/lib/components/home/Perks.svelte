<script>
  import affordableIcon from '$assets/svg/affordable.svg'
  import speedIcon from '$assets/svg/speedometer.svg'
  import seoIcon from '$assets/svg/seo.svg'
  import sunsetIcon from '$assets/svg/sunset.svg'
  import secureIcon from '$assets/svg/secure.svg'
  import accessibleIcon from '$assets/svg/accessible.svg'
</script>

<section id="perks">
  <div class="container">
    <h2><theme-color>Arbor</theme-color> Offers</h2>
    <div class="grid container">
      <div class="item">
        <img class="icon" src={ affordableIcon } alt="Affordable Services" />
        <h3>affordable</h3>
        <p>Introducing an affordable subscription model that simplifies website management at a budget-friendly price.</p>
      </div>
      <div class="item">
        <img class="icon" src={ speedIcon } alt="Performance Driven" />
        <h3>performance-drive</h3>
        <p>Lightning-fast website performance fine-tuned with our advanced optimization techniques to ensure maximum speed and responsiveness.</p>
      </div>
      <div class="item">
        <img class="icon" src={ seoIcon } alt="Search Engine Optimized" />
        <h3>search optimization</h3>
        <p>Boost your website's visibility and drive more traffic with our targeted SEO services to identify effective keywords.</p>
      </div>
      <div class="item">
        <img class="icon" src={ sunsetIcon } alt="Beautiful Designs" />
        <h3>eye-catching design</h3>
        <p>Make a lasting impression with our stunning and eye-catching website designs that capture the essence of your brand and engages your visitors.</p>
      </div>
      <div class="item">
        <img class="icon" src={ secureIcon } alt="Secure Websites" />
        <h3>secure hosting</h3>
        <p>Rest easy with our secure static website hosting, making it virtually impossible for attackers to compromise your site.</p>
      </div>
      <div class="item">
        <img class="icon" src={ accessibleIcon } alt="ADA Compliant" />
        <h3>ada-compliant</h3>
        <p>We ensure your site meets accessibility standards to provide an inclusive user experience for all visitors. <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noreferrer">learn more</a></p>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  #perks {
    text-align: center;
    margin-bottom: 8rem;
    & .grid {
      grid-row-gap: 3rem;
      @media (min-width: 40em) {
        grid-template-columns: repeat(2,minmax(0%,1fr));
      }
      @media (min-width: 64em) {
        grid-template-columns: repeat(3,minmax(0%,1fr));
      }
      & .item {
        text-align: center;
        & .icon {
          display: block;
          margin-inline: auto;
        }
        & h3 {
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 1em;
          display: inline-block;
          position: relative;
          &::before {
            content: '';
            background-image: url(../../assets/svg/bg-leaves.svg);
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            aspect-ratio: 202 / 221;
            transform: translate(-75%, -25%) scaleX(-100%);
            z-index: -1;
            opacity: 0.5;
          }
        }
      }
    }
  }
</style>
