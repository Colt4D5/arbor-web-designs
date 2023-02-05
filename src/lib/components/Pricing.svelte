<script>
	import Button from "$components/Button.svelte";
</script>

<section id="price-cards">
  <div class="container">
    <h2>Pricing</h2>
    <div class="pricing-card">
      <h3 class="card-heading">Included <br>Features</h3>
      <div class="pricing-card-contents">
        <h4>$0</h4>
        <ul>
          <li>Website design/build</li>
          <li>Mobile Responsive</li>
          <li>Fast & secure</li>
          <li>Custom coded</li>
          <li>Logo creation</li>
          <li>Image Optimization</li>
        </ul>
        <Button href="/services" classes="secondary cta">Learn More</Button>
      </div>
    </div>
    <div class="pricing-card">
      <h3 class="card-heading active">Basic Subscription</h3>
      <div class="pricing-card-contents">
        <h4>$150/mo</h4>
        <ul>
          <li>$0 down</li>
          <li>Unlimited Edits</li>
          <li>Up to 5 pages</li>
          <li>Search Engine Optimized</li>
          <li>Google Analytics</li>
          <li>24/7 technical support</li>
        </ul>
        <Button href="/services" classes="cta">Learn More</Button>
      </div>
    </div>
    <div class="pricing-card">
      <h3 class="card-heading">Premium <br>Subscription</h3>
      <div class="pricing-card-contents">
        <h4>$300/mo</h4>
        <ul>
          <li>1,000+ word blog post</li>
          <li>SEO-friendly</li>
          <li>Keyword Research</li>
          <li>Up to 8 pages</li>
          <li>Premium animations</li>
          <li>$100 additional posts</li>
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
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        & .card-heading {
          background-color: #e5e5e5;
          min-height: 5rem;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-weight: 400;
          line-height: 1.2;
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
            margin-bottom: 0.5em;
            font-size: 1.75em;
          }
          & ul {
            list-style: none;
            margin: 0.75rem 0 2rem;
            padding: 0;
            & li {
              list-style: none;
              margin: 5px 0;
              font-size: 1.25rem;
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
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
</style>