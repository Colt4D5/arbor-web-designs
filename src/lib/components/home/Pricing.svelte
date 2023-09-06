<script>
	import Button from "$components/Button.svelte";

  import observer from '$utils/useObserverAction';
  import { fadeUp } from '$utils/useObserverAction';
</script>

<section data-transition="fade-up" use:observer on:enterViewport={fadeUp} id="price-cards">
  <!-- LEFT CARD -->
  <div class="container">
    <h2>pricing</h2>
    <div class="pricing-card">
      <div class="card-heading">
        <h3>Up Front<span style="font-size:0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h3>
      </div>
      <div class="pricing-card-contents">
        <h4><small>Starts at</small><br>$2,195<span style="font-size:0.75em;" class="asterisk" data-tooltip="+ $25 monthly hosting fee">*</span></h4>
        <ul>
          <li>Website design/build</li>
          <li>Mobile Responsive</li>
          <li>Fast & secure</li>
          <li>Custom coded</li>
          <li>Logo creation</li>
        </ul>
        <Button href="/services" classes="secondary cta">Learn More</Button>
      </div>
    </div>
    <!-- MIDDLE CARD -->
    <div class="pricing-card most-popular">
      <div class="card-heading active">
        <h3>Subscription</h3>
      </div>
      <div class="pricing-card-contents">
        <h4>$150/mo<span style="font-size: 0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h4>
        <ul>
          <li>$0 down</li>
          <li>Unlimited Edits<span class="asterisk" data-tooltip="Content edits, structure edits vary">*</span></li>
          <li>Up to 5 pages</li>
          <li>Search Engine Optimized</li>
          <li>Google Analytics</li>
          <li>24/7 technical support</li>
        </ul>
        <Button href="/services" classes="cta">Learn More</Button>
      </div>
    </div>
    <!-- RIGHT CARD -->
    <div class="pricing-card">
      <div class="card-heading">
        <h3>Premium <br>Subscription<span style="font-size: 0.75em;" class="asterisk" data-tooltip="price may vary by features">*</span></h3>
      </div>
      <div class="pricing-card-contents">
        <h4>$300/mo</h4>
        <ul>
          <li>1,000+ word blog post</li>
          <li>Up to 8 pages</li>
          <li>Premium animations</li>
          <li>Custom Analytics & Reporting</li>
          <li>Keyword Research</li>
        </ul>
        <Button href="/services" classes="secondary cta">Learn More</Button>
      </div>
    </div>

  </div>
</section>

<style lang="postcss">
  #price-cards {
    margin-bottom: 8rem;
    position: relative;
    z-index: 2;
    & .container {
      text-align: center;
      & h2 {
        margin-bottom: 4rem;
      }
      & .pricing-card {
        width: min(80%, 325px);
        margin: 10px;
        margin-top: 10px;
        background-color: #fff;
        box-shadow: 5px 5px 12px #22222244;
        text-align: center;
        border-radius: 0.5rem;
        display: inline-block;
        vertical-align: top;
        position: relative;
        &.most-popular {
          z-index: 9;
          & .card-heading {
            & h3 {
              color: var(--light);
            }
          }
          &::after {
            content: 'Most Popular';
            position: absolute;
            left: 50%;
            top: 0.5rem;
            transform: translate(-50%, -50%);
            background-color: var(--secondary);
            color: #fff;
            padding: 0.15rem 1.5rem 0.75rem;
            white-space: nowrap;
            clip-path: polygon(0 0, 100% 0, 90% 75%, 50% 100%, 10% 75%);
            z-index: 2;
            border-radius: 0.15rem 0.15rem 0 0;
          }
          &::before {
            content: 'Most Popular';
            position: absolute;
            left: 50%;
            top: 0.5rem;
            transform: translate(-50%, -50%);
            background-color: var(--secondary);
            color: #fff;
            padding: 0.15rem 1.5rem 0.75rem;
            white-space: nowrap;
            z-index: -1;
            filter: brightness(0.6);
            border-radius: 0.15rem 0.15rem 0 0;
          }
        }
        & .card-heading {
          border-radius: 0.5rem 0.5rem 0 0;
          background-color: #e5e5e5;
          min-height: 5rem;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-weight: 400;
          line-height: 1.2;
          & h3 {
            margin-bottom: 0;
          }
          &.active {
            background-color: var(--primary);
            color: #fff;
          }
        }
        & .pricing-card-contents {
          padding: 1.5rem 1.5rem 1.5rem;
          min-height: 300px;
          position: relative;
          & h4 {
            margin-bottom: 1em;
            font-size: 1.5em;
            line-height: 1.1;
            small {
              font-size: 80%;
              font-weight: 400;
            }
          }
          & ul {
            list-style: none;
            margin: 0.75rem 0 2rem;
            padding: 0;
            & li {
              list-style: none;
              margin: 5px 0;
              font-size: 1rem;
            }
          }
        }
      }
    }
    @media screen and (min-width: 40em) {
      margin-bottom: 4rem;
      & .container {
        & .pricing-card:nth-child(3) {
          scale: 1.2;
          & ul {
            & li {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
</style>